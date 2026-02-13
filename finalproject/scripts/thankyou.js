const results = document.querySelector("#results");

const params = new URLSearchParams(window.location.search);

if (results) {
  results.innerHTML = `
    <p><strong>Name:</strong> ${params.get("firstname")} ${params.get("lastname")}</p>
    <p><strong>Email:</strong> ${params.get("email")}</p>
    <p><strong>Phone:</strong> ${params.get("phone")}</p>
    <p><strong>Message:</strong> ${params.get("message")}</p>
    <p><strong>Membership:</strong> ${params.get("membership")}</p>
  `;
}