// const axios = require('axios').default;

// const cardContEl = document.querySelector('.js-card__cont');
// console.dir(cardContEl);
// const movieGrid = document.querySelector('.movie-grid-list');
// const gridMovieCard = document.querySelector('.grid-movie-card');

// movieGrid.addEventListener('click', onCardClik());

// cardContEl.addEventListener('click', onCardConteinerClik);

// function onCardClik(event) {
//   const currentFilms = [];
//   if (event.currentFilms === movieGrid.childNodes) {
//     onOpenModal();
//   }
// }
// console.dir(movieGrid.childNodes);
// function onOpenModal() {
//   document.body.classList.add('hidden');
// }

// movieCardEl.addEventListener('click', () => {
//   console.log(cardContEl.classList);
//   cardContEl.classList.add('hidden');
// });

// function onCardConteinerClik(event) {
//   const isCard = event.movieGrid.childNodes.contains('.movie-grid-list');
//   if (!isCard) {
//     return;
//   }
//   const currentActiveCard = document.querySelector('.card__cont');
//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('hidden');
//   }
//   const swatchEl = event.movieGrid.childNodes;
//   const parentCard = swatchEl.closest('.card__cont');

//   parentCard.classList.add('hidden');
// }
import { getMovieByID } from "./MovieObjectByID";

const openModalCard = document.querySelector('[data-modalCard-open]');
const closeModalCard = document.querySelector('[data-modalCard-close]');
const modalCardCont = document.querySelector('[data-modalCard]');

openModalCard.addEventListener('click', onOpenModalCard);
closeModalCard.addEventListener('click', onCloseModalCard);

function onOpenModalCard(event) {
  // debugger
  // console.log(event.target.attributes.id.value);
  
  if (event.target.classList.contains('grid-movie-card')) {
    //записуємо id в змінну
    const filmID = event.target.attributes.id.value;
    //визиваємо ф-ію, що записує об'єкт фільму у змінну
    const filmObject = getMovieByID(filmID);
    console.log(filmObject);


    modalCardCont.classList.remove('no-activ');
    document.body.classList.add('no-scroll');

  } 
  return
    // modalCardCont.classList.remove('no-activ');
    // document.body.classList.add('no-scroll');
  // modalCardCont.classList.remove('no-activ');
  // document.body.classList.add('no-scroll');
}

function onCloseModalCard(event) {
  modalCardCont.classList.add('no-activ');
  document.body.classList.remove('no-scroll');
}
// один з не працюючих варіантів достукатись до лішки
// let list = document.querySelectorAll('.movie-grid-list li a');
// console.log(list);
// list.forEach(item => {
//   item.addEventListener('click', e => {
//     list.forEach(el => {
//       el.classList.remove('is-hidden');
//     });
//     item.classList.add('is-hidden');
//   });
// });

// // =============================
// // закриття по esc
// // function oneItemCardClick(event) {
// //   event.preventDefault();
// //   if (!event.target.classList.contains('movie-card')) {
// //     return;
// //   }
// //   const instance = basicLightbox.create(
// //     `<img src="${evt.target.dataset.source}">`
// //   );
// //   instance.show(() => window.addEventListener('keydown', oneItemKeyPress));
// //   function oneItemKeyPress(event) {
// //     if (event.key === 'Escape') {
// //       instance.close(() =>
// //         window.removeEventListener('keydown', oneItemKeyPress)
// //       );
// //       console.log(event.key);
// //       return;
// //     }
// //     return;
// //   }
// // }
