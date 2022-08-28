(() => {
  const refs = {
    btnPageHome: document.querySelector('[data-btn-home]'),
    btnPageLibrary: document.querySelector('[data-btn-library]'),
    header: document.querySelector('#header'),
  };

  console.log(refs.btnPageHome);
  console.log(refs.btnPageLibrary);
  console.log(refs.header);

  refs.btnPageHome.addEventListener('click', togglePageHome);
  refs.btnPageLibrary.addEventListener('click', togglePageLibrary);

  function togglePageHome() {
    refs.btnPageHome.classList.add('current');
    refs.btnPageLibrary.classList.remove('current');
    refs.header.classList.add('header__background-home');
    refs.header.classList.remove('header__background-library');
  }

  function togglePageLibrary() {
    refs.btnPageLibrary.classList.add('current');
    refs.btnPageHome.classList.remove('current');
    refs.header.classList.add('header__background-library');
    refs.header.classList.remove('header__background-home');
  }
})();
