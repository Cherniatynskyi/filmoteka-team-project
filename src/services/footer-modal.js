
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      backdrop: document.querySelector('[backdrop]')
    };
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', onBackDropClick);

  
  function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      var htmlEl = document.getElementsByTagName("HTML")[0]
      htmlEl.classList.toggle('no-scroll');
  }

  function onBackDropClick(evt) {
    if (!evt.target.classList.contains('backdrop')) {
      return
    }
    refs.modal.classList.add('is-hidden');
    var htmlEl = document.getElementsByTagName("HTML")[0]
    htmlEl.classList.remove('no-scroll');
  }

  function onCloseTeamModal() {
    refs.modal.classList.add('is-hidden');
    var htmlEl = document.getElementsByTagName("HTML")[0]
    htmlEl.classList.remove('no-scroll');
  }

})();
  

