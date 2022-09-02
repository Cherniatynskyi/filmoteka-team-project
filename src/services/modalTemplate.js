import { getMovieByID } from './MovieObjectByID';
import {
  getWatchedMoviesInStorage,
  getQueueMoviesInStorage,
} from './myLibraryPage';

const openModalCard = document.querySelector('[data-modalCard-open]');
const closeModalCard = document.querySelector('[data-modalCard-close]');
const modalCardCont = document.querySelector('[data-modalCard]');
const backdrop = document.querySelector('[backdrop]');
const cardContMarking = document.querySelector('.card__cont-marking');
const cardTableContainer = document.querySelector('.card__table');
const addToLSButtons = document.querySelectorAll('[data-add-to]');

openModalCard.addEventListener('click', onOpenModalCard);
closeModalCard.addEventListener('click', onCloseModalCard);
modalCardCont.addEventListener('click', onBackModalDropClick);
window.addEventListener('keydown', onEscClick);

let currentMovie = null;

function onCloseModalCard() {
  modalCardCont.classList.add('no-activ');
  const htmlEl = document.getElementsByTagName('HTML')[0];
  htmlEl.classList.remove('no-scroll');
  cardContMarking.innerHTML = '';
  cardTableContainer.innerHTML = '';
}

function onBackModalDropClick(evt) {
  if (!evt.target.classList.contains('card__cont')) {
    return;
  }
  onCloseModalCard();
}

function onEscClick(evt) {
  if (evt.key === 'Escape') {
    onCloseModalCard();
    backdrop.classList.add('is-hidden');
  }
}

function onOpenModalCard(event) {
  if (event.target.classList.contains('grid-movie-card')) {
    const filmID = event.target.attributes.id.value;

    getMovieByID(filmID).then(res => cardMarkUp(res));

    modalCardCont.classList.remove('no-activ');
    const htmlEl = document.getElementsByTagName('HTML')[0];
    htmlEl.classList.add('no-scroll');
  }
  return;
}

function cardMarkUp(filmObject) {

  // checkMovieByIdWatched(filmObject, 'watched');
  // checkMovieByIdQueue(filmObject, 'queue');

  let markUPImg = `<img class="card__img" src="http://image.tmdb.org/t/p/w500${filmObject.poster_path}" alt="${filmObject.title}" />`;
  // if (filmObject.poster_path) {
  //   markUPImg = `<img class="card__img" src="http://image.tmdb.org/t/p/w500${filmObject.poster_path}" alt="${filmObject.title}" />`;
  // } else {
  //   markUPImg = `<img class="card__img" src="./img/placeholder.jpeg" alt="${filmObject.title}" />`;
  // }

  currentMovie = filmObject;
  cardContMarking.insertAdjacentHTML('afterbegin', markUPImg);

  const trimMarkupVote = trimMarkup(filmObject.vote_average);
  const trimMarkupPopular = trimMarkup(filmObject.popularity);

  let markupGenre = filmObject.genres;
  let cardGenre
  if (!filmObject.genres.length === 0) {
    cardGenre = markupGenre.map(genr => genr.name);
  } else {
    cardGenre = "No information"
  }

  // cardGenre: markupGenre.length > 0 ? cardGenre.join(', ') : 'Unknown';

  const markUp = `<h1 class="card__table-heder">${filmObject.title}</h1>
      <table class="card__table">
        <tr class="card__table-vote">
          <td class="card__table-name ">Vote / Votes</td>
          <td class="card__table-value "><span class="average">${trimMarkupVote}</span> / <span class="vote">${filmObject.vote_count}</span></td>
        </tr>
        <tr class="card__table-popularity">
          <td class="card__table-name">Popularity</td>
          <td class="card__table-value">${trimMarkupPopular}</td>
        </tr>
        <tr class="card__table-title">
          <td class="card__table-name">Original Title</td>
          <td class="card__table-value">${filmObject.title}</td>
        </tr>
        <tr class="card__table-genre">
          <td class="card__table-name last-child">Genre</td>
          <td class="card__table-value last-child">${cardGenre}</td>
        </tr>
      </table>
      <div class="card__about">
        <h2 class="card__about-heder">About</h2>
        <p class="card__about-text">${filmObject.overview}</p>
      </div>`;
  cardTableContainer.insertAdjacentHTML('afterbegin', markUp);
  addToLSButtons.forEach(btn => btn.addEventListener('click', onModalBtnClick));
}

function onModalBtnClick(e) {
  const { addTo } = e.currentTarget.dataset;

  addMoviesToStorage(addTo, currentMovie);
  toggleBtn(addTo);

  const activeBtn = document.querySelector(`.modal-${addTo}`);
  checkPlace(activeBtn);
}

function checkPlace(btn) {
  return (
    btn.classList.contains('is-active')
  );
}

function toggleBtn(key) {
  const classActive = 'modal__btn--active';
  const btn = document.querySelector(`.modal-${key}`);

  if (btn.classList.contains(classActive)) {
    btn.classList.remove(classActive);
    btn.textContent = 'Add to ' + key;
    return;
  }

  btn.classList.add(classActive);
  btn.textContent = 'Remove from ' + key;
}

function addMoviesToStorage(key, movie) {
  const watchedMovieInStorage = localStorage.getItem(key);
  if (!watchedMovieInStorage) {
    localStorage.setItem(key, JSON.stringify([movie]));
    return;
  }
  let watchedMovies = JSON.parse(watchedMovieInStorage);
  const watchedMoviesInStorageArr = watchedMovies.find(
    item => item.id === addWatchedMovie.id

  );
  if (watchedMoviesInStorageArr) {
    localStorage.setItem(key, JSON.stringify(watchedMovies));
  } else {
    watchedMovies.push(addWatchedMovie);
    localStorage.setItem(KEY_WATCHED, JSON.stringify(watchedMovies));
  }
}

function addQueueMoviesInStorage(addQueueMovie) {
  const queueMovieInStorage = localStorage.getItem(KEY_QUEUE);
  if (!queueMovieInStorage) {
    localStorage.setItem(KEY_QUEUE, JSON.stringify([addQueueMovie]));
    return;
  }
  let queueMovies = JSON.parse(queueMovieInStorage);
  const queueMoviesInStorageArr = queueMovies.find(
    item => item.id === addQueueMovie.id
  );
  if (queueMoviesInStorageArr) {
    localStorage.setItem(KEY_QUEUE, JSON.stringify(queueMovies));
  } else {
    queueMovies.push(addQueueMovie);
    localStorage.setItem(KEY_QUEUE, JSON.stringify(queueMovies));

  }
}

function trimMarkup(trim) {
  const trimMarkup = trim.toFixed(1);
  return trimMarkup;
}

// function checkMovieByIdWatched(movie, key) {
//   const lockalStorageId = JSON.parse(localStorage.getItem(key)) || [];
//   console.log(lockalStorageId, 'Просмотренные фильмы');
//   const includesMovie = lockalStorageId.find(elem => elem.id === movie.id);
//   console.log(includesMovie, 'нука');
//   if (!includesMovie) {
//     addToWatchedButton.addEventListener('click', () =>
//       addWatchedMoviesInStorage(movie)
//     );
//     addToWatchedButton.textContent = 'Add to watched';
//   } else if (includesMovie) {
//     addToWatchedButton.addEventListener('click', () =>
//       removeMovieFromWatched(movie, key)
//     );
//     addToWatchedButton.textContent = 'Remove from watched';
//   }
// }
// function checkMovieByIdQueue(movie, key) {
//   const lockalStorageId = JSON.parse(localStorage.getItem(key)) || [];
//   console.log(lockalStorageId, 'Просмотренные фильмы');
//   const includesMovie = lockalStorageId.find(elem => elem.id === movie.id);

//   if (!includesMovie) {
//     console.log(lockalStorageId.includes(includesMovie));
//     addToQueueButton.addEventListener('click', () =>
//       addQueueMoviesInStorage(movie)
//     );
//     addToQueueButton.textContent = 'Add to queue';
//   } else if (includesMovie) {
//     addToQueueButton.addEventListener('click', () =>
//       removeMovieFromQueue(movie, key)
//     );
//     addToQueueButton.textContent = 'Remove from queue';
//   }
// }

// function removeMovieFromWatched(movie) {
//   const localStorageArr = JSON.parse(localStorage.getItem(KEY_WATCHED));
//   const includesMovie = localStorageArr.find(elem => elem.id === movie.id);
//   if (includesMovie) {
//     const updatedArr = localStorageArr.filter(elem => elem.id !== movie.id);
//     localStorage.setItem(KEY_WATCHED, JSON.stringify(updatedArr));
//   }

// Dynamic changing text-content on modal buttons

addToQueueButton.addEventListener('click', () => {
  if (addToQueueButton.textContent == 'Remove from queue') {
    addToQueueButton.textContent = 'Removed from Queue';
    addToQueueButton.classList.add('card-buton-change');
  }
  if (addToQueueButton.textContent == 'Add to queue') {
    addToQueueButton.textContent = 'Added to Queue';
    addToQueueButton.classList.add('card-buton-change');
  }
});

// addToQueueButton.addEventListener('click', () => {
//   if (addToQueueButton.textContent == "Remove from queue") {
//     addToQueueButton.textContent = "Removed from Queue"
//     addToQueueButton.classList.add('card-buton-change')
//   }
//   if (addToQueueButton.textContent == "Add to queue") {
//     addToQueueButton.textContent = "Added to Queue"
//     addToQueueButton.classList.add('card-buton-change')
//   }
// });
//   getWatchedMoviesInStorage();
// }

// function removeMovieFromQueue(movie) {
//   const localStorageArr = JSON.parse(localStorage.getItem(KEY_QUEUE));
//   const includesMovie = localStorageArr.find(elem => elem.id === movie.id);
//   if (includesMovie) {
//     const updatedArr = localStorageArr.filter(elem => elem.id !== movie.id);
//     localStorage.setItem(KEY_QUEUE, JSON.stringify(updatedArr));
//   }

//   getQueueMoviesInStorage();
// }


