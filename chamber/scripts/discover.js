const menuButton = document.getElementById("ham-btn");
const nav = document.getElementById("nav-bar"); 

menuButton.addEventListener("click", () => {
    nav.classList.toggle("show"); 
    menuButton.innerHTML = nav.classList.contains("show") ? "&#215;" : "&#9776;";
});

import { places } from "../data/discover.mjs";

const grid = document.querySelector("#discoverGrid");

const modal = document.querySelector("#discover-modal");
const modalTitle = document.querySelector("#modal-title");
const modalCost = document.querySelector("#modal-cost");
const modalDescription = document.querySelector("#modal-description");
const closeModalBtn = document.querySelector("#close-modal");

places.forEach((place) => {
  const card = document.createElement("div");
  card.classList.add("discover-card");

  card.innerHTML = `
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>

    <div class="discover-card-content">
      <h2>${place.name}</h2>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button class="learn-more">Learn More</button>
    </div>
  `;

  const btn = card.querySelector(".learn-more");
  btn.addEventListener("click", () => {
    modalTitle.textContent = place.name;
    modalCost.textContent = `Cost: ${place.cost}`;
    modalDescription.textContent = place.details;

    modal.classList.add("open");
  });

  grid.appendChild(card);
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
});