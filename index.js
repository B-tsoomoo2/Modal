const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".Modal-next");
const closeBtn = document.querySelector("#close-btn");

const modalContent = document.querySelector(".content");

closeBtn.addEventListener("click", () => {
  modalContent.classList.add("hidden");
});

openBtn.addEventListener("click", () => {
  modalContent.classList.remove("hidden");
});
