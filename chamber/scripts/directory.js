const membersContainer = document.querySelector('#members');
const gridBtn = document.querySelector('#gridView');
const listBtn = document.querySelector('#listView');

async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) {
    membersContainer.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        membersContainer.appendChild(card);
    });
}

gridBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid-view');
    membersContainer.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
    membersContainer.classList.add('list-view');
    membersContainer.classList.remove('grid-view');
});

getMembers();