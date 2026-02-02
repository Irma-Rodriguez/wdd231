document.addEventListener("DOMContentLoaded", () => {

  const timestamp = document.querySelector("#timestamp");
  if (timestamp) timestamp.value = new Date().toISOString();
 
  document.querySelectorAll("[data-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = document.getElementById(btn.dataset.modal);
      if (modal) modal.showModal();
    });
  });

  document.querySelectorAll(".close-modal").forEach(button => {
    button.addEventListener("click", () => {
      button.closest("dialog").close();
    });
  });

  const cards = document.querySelectorAll(".membership-cards .card");
  cards.forEach((card, index) => {
    setTimeout(() => card.classList.add("show"), 200 * index);
  });

});