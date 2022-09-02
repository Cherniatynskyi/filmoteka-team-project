import { getMovieByID } from './MovieObjectByID';
import { getWatchedMoviesInStorage, getQueueMoviesInStorage } from './myLibraryPage';

const openModalCard = document.querySelector('[data-modalCard-open]');
const closeModalCard = document.querySelector('[data-modalCard-close]');
const modalCardCont = document.querySelector('[data-modalCard]');
const backdrop = document.querySelector('[backdrop]');
const cardContMarking = document.querySelector('.card__cont-marking');
const cardTableContainer = document.querySelector('.card__table');

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
  const addToLSButtons = document.querySelectorAll('[data-add-to]');

  const watchedMovie = JSON.parse(localStorage.getItem('watched'));
  const queueMovie = JSON.parse(localStorage.getItem('queue'));

  if (watchedMovie) {
    if (watchedMovie.find(item => item.id === filmObject.id)) {
      addToLSButtons[0].textContent = 'Remove from watched';
      addToLSButtons[0].classList.remove('add');
    } else {
      addToLSButtons[0].textContent = 'Add to watched';
      addToLSButtons[0].classList.add('add');
    }
  }

  if (queueMovie) {
    if (queueMovie.find(item => item.id === filmObject.id)) {
      addToLSButtons[1].textContent = 'Remove from queue';
      addToLSButtons[1].classList.remove('add');
    } else {
      addToLSButtons[1].textContent = 'Add to queue';
      addToLSButtons[1].classList.add('add');
    }
  }

  addToLSButtons.forEach(btn => btn.addEventListener('click', onModalBtnClick));
}

function onModalBtnClick(e) {
  const { addTo } = e.currentTarget.dataset;

  const activeBtn = document.querySelector(`.modal-${addTo}`);
  
  if (activeBtn.classList.contains('add')) {
    addMoviesToStorage(addTo, currentMovie);
    toggleBtn(addTo);
  } else {
    removeMovieFromWatched(addTo, currentMovie);
    toggleBtn(addTo);
  }
  
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

  if (!btn.classList.contains('add')) {
    btn.classList.remove(classActive);
    btn.classList.add('add');
    btn.textContent = 'Add to ' + key;
    return;
  }

  btn.classList.add(classActive);
  btn.classList.remove('add');
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
    item => item.id === movie.id

  );
  if (watchedMoviesInStorageArr) {
    localStorage.setItem(key, JSON.stringify(watchedMovies));
  } else {
    watchedMovies.push(movie);
    localStorage.setItem(key, JSON.stringify(watchedMovies));
  }
}


function removeMovieFromWatched(key, movie) {
  const localStorageArr = JSON.parse(localStorage.getItem(key));
  const includesMovie = localStorageArr.find(elem => elem.id === movie.id);
  if (includesMovie) {
    const updatedArr = localStorageArr.filter(elem => elem.id !== movie.id);
    localStorage.setItem(key, JSON.stringify(updatedArr));
  }
}

function trimMarkup(trim) {
  const trimMarkup = trim.toFixed(1);
  return trimMarkup;
}
