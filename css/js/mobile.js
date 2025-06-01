(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openMobileBtn: document.querySelector("[data-mobile-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeMobileBtn: document.querySelector("[data-mobile-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    mobile: document.querySelector("[data-mobile]"),
  };

  refs.openMobileBtn.addEventListener("click", toggleMobile);
  refs.closeMobileBtn.addEventListener("click", toggleMobile);

  function toggleMobile() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.mobile.classList.toggle("is-open");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    window.addEventListener('click', outsideClick);
  } else {
    console.error('Modal elements not found. Please check your HTML structure.');
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  function outsideClick(event) {
    if (event.target === refs.modal) {
      toggleModal();
    }
  }
})();
