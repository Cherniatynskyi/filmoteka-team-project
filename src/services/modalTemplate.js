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
const addToWatchedButton = document.querySelector('[data-add-to-watched]');
const addToQueueButton = document.querySelector('[data-add-to-queue]');

openModalCard.addEventListener('click', onOpenModalCard);
closeModalCard.addEventListener('click', onCloseModalCard);
modalCardCont.addEventListener('click', onBackModalDropClick);
window.addEventListener('keydown', onEscClick);

const KEY_WATCHED = 'watched-movies-in-storage';
const KEY_QUEUE = 'queue-movies-in-storage';

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

    addToQueueButton.classList.remove('card-buton-change')
    addToWatchedButton.classList.remove('card-buton-change')

    getMovieByID(filmID).then(res => cardMarkUp(res));

    modalCardCont.classList.remove('no-activ');
    const htmlEl = document.getElementsByTagName('HTML')[0];
    htmlEl.classList.add('no-scroll');
  }
  return;
}

function cardMarkUp(filmObject) {
  checkMovieByIdWatched(filmObject, KEY_WATCHED);
  checkMovieByIdQueue(filmObject, KEY_QUEUE);
  const markUPImg = `<img class="card__img" src="http://image.tmdb.org/t/p/w500${filmObject.poster_path}" alt="${filmObject.title}" />`;
  cardContMarking.insertAdjacentHTML('afterbegin', markUPImg);
  const trimMarkupVote = trimMarkup(filmObject.vote_average);
  const trimMarkupPopular = trimMarkup(filmObject.popularity);

  let markupGenre = filmObject.genres;
  let cardGenre = markupGenre.map(genr => genr.name);

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
}

export function addWatchedMoviesInStorage(filmObject) {
  const localStorageArr = localStorage.getItem(KEY_WATCHED) || [];
  const parsedArr = JSON.parse(localStorage.getItem(KEY_WATCHED)) || [];
  if (!localStorageArr.includes(filmObject.id)) {
    parsedArr.push(filmObject);
    localStorage.setItem(KEY_WATCHED, JSON.stringify(parsedArr));
  }

  return;
}
export function addQueueMoviesInStorage(filmObject) {
  const localStorageArrq = localStorage.getItem(KEY_QUEUE) || [];
  const parsedArrq = JSON.parse(localStorage.getItem(KEY_QUEUE)) || [];
  console.log(parsedArrq, 'распасеный массив');
  if (!localStorageArrq.includes(filmObject.id)) {
    parsedArrq.push(filmObject);
    localStorage.setItem(KEY_QUEUE, JSON.stringify(parsedArrq));
  }
  return;
}
function trimMarkup(trim) {
  const trimMarkup = trim.toFixed(1);
  return trimMarkup;
}

function checkMovieByIdWatched(movie, key) {
  const lockalStorageId = JSON.parse(localStorage.getItem(key)) || [];
  console.log(lockalStorageId, 'Просмотренные фильмы');
  const includesMovie = lockalStorageId.find(elem => elem.id === movie.id);
  console.log(includesMovie, 'нука');
  if (!includesMovie) {
    addToWatchedButton.addEventListener('click', () =>
      addWatchedMoviesInStorage(movie)
    );
    addToWatchedButton.textContent = 'Add to watched';
  } else if (includesMovie) {
    addToWatchedButton.addEventListener('click', () =>
      removeMovieFromWatched(movie, key)
    );
    addToWatchedButton.textContent = 'Remove from watched';
  }
}
function checkMovieByIdQueue(movie, key) {
  const lockalStorageId = JSON.parse(localStorage.getItem(key)) || [];
  console.log(lockalStorageId, 'Просмотренные фильмы');
  const includesMovie = lockalStorageId.find(elem => elem.id === movie.id);

  if (!includesMovie) {
    console.log(lockalStorageId.includes(includesMovie));
    addToQueueButton.addEventListener('click', () =>
      addQueueMoviesInStorage(movie)
    );
    addToQueueButton.textContent = 'Add to queue';
  } else if (includesMovie) {
    addToQueueButton.addEventListener('click', () =>
      removeMovieFromQueue(movie, key)
    );
    addToQueueButton.textContent = 'Remove from queue';
  }
}

function removeMovieFromWatched(movie) {
  const localStorageArr = JSON.parse(localStorage.getItem(KEY_WATCHED));
  const includesMovie = localStorageArr.find(elem => elem.id === movie.id);
  if (includesMovie) {
    const updatedArr = localStorageArr.filter(elem => elem.id !== movie.id);
    localStorage.setItem(KEY_WATCHED, JSON.stringify(updatedArr));
  }

  getWatchedMoviesInStorage();
}

function removeMovieFromQueue(movie) {
  const localStorageArr = JSON.parse(localStorage.getItem(KEY_QUEUE));
  const includesMovie = localStorageArr.find(elem => elem.id === movie.id);
  if (includesMovie) {
    const updatedArr = localStorageArr.filter(elem => elem.id !== movie.id);
    localStorage.setItem(KEY_QUEUE, JSON.stringify(updatedArr));
  }

  getQueueMoviesInStorage();
}


// Dynamic changing text-content on modal buttons 

addToQueueButton.addEventListener('click', () => {
  if (addToQueueButton.textContent == "Remove from queue") {
    addToQueueButton.textContent = "Removed from Queue"
    addToQueueButton.classList.add('card-buton-change')
  }
  if (addToQueueButton.textContent == "Add to queue") {
    addToQueueButton.textContent = "Added to Queue"
    addToQueueButton.classList.add('card-buton-change')
  }
});

addToWatchedButton.addEventListener('click', () => {
  if (addToWatchedButton.textContent == "Remove from watched") {
    addToWatchedButton.textContent = "Removed from watched"
    addToWatchedButton.classList.add('card-buton-change')
    
  }
  if (addToWatchedButton.textContent == "Add to watched") {
    addToWatchedButton.textContent = "Added to Watched"
    addToWatchedButton.classList.add('card-buton-change')
  }
});