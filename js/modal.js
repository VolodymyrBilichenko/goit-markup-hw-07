(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalCheckbox: document.querySelector("[data-modal-checkbox]"),
    submeitModalBtn: document.querySelector("[data-modal-submit]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  // active btn depens of check status
  refs.modalCheckbox.addEventListener("click", () => {
    refs.submeitModalBtn.toggleAttribute('disabled')
  })

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();