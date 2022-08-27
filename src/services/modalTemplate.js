const axios = require('axios').default;

const movieGrid = document.querySelector('.movie-grid-list');
const gridMovieCard = document.querySelector('.grid-movie-card');
const cardContEl = document.querySelector('.card__cont');

console.log(movieGrid);
console.log(cardContEl);
console.dir(gridMovieCard);
console.dir(movieGrid);

// movieGrid.addEventListener('click', onCardClik);

function onCardClik(event) {
  if (event.currentTarget === event.target) {
    onOpenModal();
  }
}

// function onOpenModal() {
//   document.body.classList.add('hidden');
// }

// movieCardEl.addEventListener('click', () => {
//   console.log(cardContEl.classList);
//   cardContEl.classList.add('hidden');
// });
// cardContEl.insertAdjacentHTML('beforeend', markupCardItems(cardItems));
// card.addEventListener('click', oneItemCardClick);
// card.addEventListener('submit', onSubmitForm);
// card.addEventListener('click', toggleModal);

// cardItems - це обєкт який приймається фкнкцією щоб рендити
// function markupCardItems(cardItems) {
//   return cardItems
//     .map(
//       ({
//         poster_path,
//         original_title,
//         title,
//         name,
//         vote_average,
//         vote_count,
//         popularity,
//         genres,
//         overview,
//       }) => {
//         return `
//   <div class="card__cont">
//     <img
//         class="card__image"
//         src='${poster_path}'
//         alt='${original_title}'
//     />
//     <div class="card__table">
//         <table>
//             <tr>
//                 <th>${title}||${name}</th>
//             </tr>
//             <tr>
//                 <td>Vote / Votes</td>
//                 <td>'${vote_average}'/'${vote_count}'</td>
//             </tr>
//             <tr>
//                 <td>Popularity</td>
//                 <td>'${popularity}'</td>
//             </tr>
//             <tr>
//                 <td>Original Title</td>
//                 <td>'${original_title}'</td>
//             </tr>
//             <tr>
//                 <td>Genre</td>
//                 <td>'${genres}'</td>
//             </tr>
//         </table>
//     </div>
//     <div class="card__about">
//     '${overview}'
//     </div>
//     <div class="card__button">
//     <button>add to Watched</button>
//     <button>add to queue</button>
//     </div>
// </div>
//         `;
//       }
//     )
//     .join('');
// }
// =============================
// закриття по esc
// function oneItemCardClick(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains('movie-card')) {
//     return;
//   }
//   const instance = basicLightbox.create(
//     `<img src="${evt.target.dataset.source}">`
//   );
//   instance.show(() => window.addEventListener('keydown', oneItemKeyPress));
//   function oneItemKeyPress(event) {
//     if (event.key === 'Escape') {
//       instance.close(() =>
//         window.removeEventListener('keydown', oneItemKeyPress)
//       );
//       console.log(event.key);
//       return;
//     }
//     return;
//   }
// }
// ============================
// при сабміті на карту зявляється хіден
// при класі хіден - додається функція, яка додає модалку
// в модалка це картинка + табличка+опис
