(() => {
  const refs = {
    watchedBtn: document.querySelector('[data-watched]'),
    queueBtn: document.querySelector('[data-queue]'),
  };

  refs.watchedBtn.addEventListener('click', onToggleWatchedBtn);
  refs.queueBtn.addEventListener('click', onToggleQueueBtn);

  function onToggleWatchedBtn(e) {
    refs.watchedBtn.classList.add('current__library-button');
    refs.queueBtn.classList.remove('current__library-button');
  }

  function onToggleQueueBtn(e) {
    refs.queueBtn.classList.add('current__library-button');
    refs.watchedBtn.classList.remove('current__library-button');
  }
})();
