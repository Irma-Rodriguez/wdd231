const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", () => {
    const firstName = document.querySelector("#firstname").value;
    const email = document.querySelector("#email").value;

    localStorage.setItem("memberName", firstName);
    localStorage.setItem("memberEmail", email);
  });
}

const welcome = document.querySelector("#welcomeBack");
const savedName = localStorage.getItem("memberName");

if (savedName && welcome) {
  welcome.textContent = `Welcome back, ${savedName}!`;
} else if (welcome) {
  welcome.style.display = "none";
}

