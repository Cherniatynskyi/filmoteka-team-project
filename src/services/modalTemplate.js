const axios = require('axios').default;

const movieGrid = document.querySelector('.movie-grid-list');
// const gridMovieCard = document.querySelector('.grid-movie-card');
const cardContEl = document.querySelector('.js-card__cont');
// movieGrid.addEventListener('click', onCardClik);
// const cardsMarkup = createCardMarkup(item);
const item = movieGrid.childNodes;
console.log(item);
// const item = movieGrid.childNodes.outerText;
// console.log(item);

// outerText;
// cardContEl.insertAdjacentHTML('beforeend', cardsMarkup);
cardContEl.insertAdjacentHTML('beforeend', item);

cardContEl.addEventListener('click', onCardConteinerClik);

// function onCardClik(event) {
//   const currentFilms = [];
//   if (event.currentFilms === movieGrid.childNodes) {
//     onOpenModal();
//   }
//   //   console.log(event.results.backdrop_path);
// }
// console.dir(movieGrid.childNodes);
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
function createCardMarkup(item) {
  return item
    .map(
      ({
        poster_path,
        original_title,
        title,
        name,
        vote_average,
        vote_count,
        popularity,
        genres,
        overview,
      }) => {
        return `
  <div class="card__cont">
    <img
        class="card__image"
        src='${item.poster_path}'
        alt='${item.original_title}'
    />
    <div class="card__table">
        <table>
            <tr>
                <th>${item.title}||${item.name}</th>
            </tr>
            <tr>
                <td>Vote / Votes</td>
                <td>'${item.vote_average}'/'${item.vote_count}'</td>
            </tr>
            <tr>
                <td>Popularity</td>
                <td>'${item.popularity}'</td>
            </tr>
            <tr>
                <td>Original Title</td>
                <td>'${item.original_title}'</td>
            </tr>
            <tr>
                <td>Genre</td>
                <td>'${item.genres}'</td>
            </tr>
        </table>
    </div>
    <div class="card__about">
    '${item.overview}'
    </div>
    <div class="card__button">
    <button>add to Watched</button>
    <button>add to queue</button>
    </div>
</div>
        `;
      }
    )
    .join('');
}
function onCardConteinerClik(event) {
  const isCard = event.movieGrid.childNodes.contains('.card__cont');
  if (!isCard) {
    return;
  }
  const currentActiveCard = document.querySelector('card__cont.hidden');
  if (currentActiveCard) {
    currentActiveCard.classList.remove('hidden');
  }
  const swatchEl = event.movieGrid.childNodes;
  const parentCard = swatchEl.closest('.card__cont');

  parentCard.classList.add('hidden');
}
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
