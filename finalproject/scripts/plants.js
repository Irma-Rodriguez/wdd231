const container = document.querySelector('#plantsContainer');
const modal = document.querySelector('#plantModal');
const modalContent = document.querySelector('#modalContent');
const closeModalBtn = document.querySelector('#closeModal');

async function getPlants() {
  try {
    const response = await fetch('data/plants.json');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const plants = await response.json();
    displayPlants(plants);

  } catch (error) {
    console.error('Error fetching plants:', error);
    container.innerHTML = `<p>Sorry, the plant data could not be loaded.</p>`;
  }
}

function displayPlants(plants) {

  plants.forEach(plant => {

    const card = document.createElement('article');
    card.classList.add('plant-card');

    card.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}" loading="lazy">
      <h2>${plant.name}</h2>
      <button class="learn-more" aria-label="Learn more about ${plant.name}">
        Learn More
      </button>
    `;

    const button = card.querySelector('.learn-more');

    button.addEventListener('click', () => {
      openModal(plant);
    });

    container.appendChild(card);
  });
}

function openModal(plant) {

  modalContent.innerHTML = `
    <h2>${plant.name}</h2>
    <p><strong>Region:</strong> ${plant.region}</p>
    <p><strong>Sunlight:</strong> ${plant.sunlight}</p>
    <p><strong>Water:</strong> ${plant.water}</p>
    <p>${plant.description}</p>
  `;

  modal.showModal();
}

closeModalBtn.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  const rect = modal.getBoundingClientRect();
  const isInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;

  if (!isInDialog) {
    modal.close();
  }
});

getPlants();