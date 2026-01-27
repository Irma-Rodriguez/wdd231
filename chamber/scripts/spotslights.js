const spotlightContainer = document.getElementById("spotlight-cards");
const membersUrl = "data/members.json";

async function loadSpotlights() {
    try {
        const response = await fetch(membersUrl);
        const members = await response.json();

        // Filtrar solo Gold (3) y Silver (2)
        const qualifiedMembers = members.filter(member =>
            member.membership === 3 || member.membership === 2
        );

        // Mezclar aleatoriamente
        const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

        // Tomar SOLO 3
        const selected = shuffled.slice(0, 3);

        spotlightContainer.innerHTML = "";

        selected.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("spotlight-card");

            card.innerHTML = `
                <h3 class="spotlight-title">${member.name}</h3>

                <div class="spotlight-body">
                    <div class="spotlight-img">
                        <img src="images/${member.image}" alt="${member.name} logo">
                    </div>

                    <div class="spotlight-info">
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <p><strong>${getMembershipName(member.membership)}</strong></p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                    </div>
                </div>
            `;


            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading spotlights:", error);
    }
}

function getMembershipName(level) {
    if (level === 3) return "Gold Member";
    if (level === 2) return "Silver Member";
    return "Member";
}

loadSpotlights();