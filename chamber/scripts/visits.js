const messageBox = document.querySelector("#visit-message");
const messageText = document.querySelector("#visit-text");
const closeBtn = document.querySelector(".close-visit");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageText.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (days < 1) {
    messageText.textContent = "Back so soon! Awesome!";
  } else {
    messageText.textContent = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
  }
}

localStorage.setItem("lastVisit", now);

closeBtn.addEventListener("click", () => {
  messageBox.style.display = "none";
});