import { getMovieByID } from './MovieObjectByID';
// import { addWatchedMoviesInStorage, addQueueMoviesInStorage} from './myLibraryPage';

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

// local
const KEY_WATCHED = 'watched-movies-in-storage';
const KEY_QUEUE = 'queue-movies-in-storage';
const moviesWatchedInLocal = JSON.parse(localStorage.getItem(KEY_QUEUE)) || [];
const moviesQueueInLocal = JSON.parse(localStorage.getItem(KEY_QUEUE)) || [];
//

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

// +++++++++++++++++++++++++++++++
function onOpenModalCard(event) {
  if (event.target.classList.contains('grid-movie-card')) {
    const filmID = event.target.attributes.id.value;
    //визиваємо ф-ію, що записує об'єкт фільму у змінну
    getMovieByID(filmID).then(res => cardMarkUp(res));

    modalCardCont.classList.remove('no-activ');
    const htmlEl = document.getElementsByTagName('HTML')[0];
    htmlEl.classList.add('no-scroll');
  }
  return;
}

function cardMarkUp(filmObject) {
  const markUPImg = `<img class="card__img" src="http://image.tmdb.org/t/p/w500${filmObject.poster_path}" alt="${filmObject.title}" />`;
  cardContMarking.insertAdjacentHTML('afterbegin', markUPImg);
  const trimMarkupVote = trimMarkup(filmObject.vote_average);
  const trimMarkupPopular = trimMarkup(filmObject.popularity);

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
          <td class="card__table-value last-child">${filmObject.genre}</td>
        </tr>
      </table>
      <div class="card__about">
        <h2 class="card__about-heder">About</h2>
        <p class="card__about-text">${filmObject.overview}</p>
      </div>`;
  cardTableContainer.insertAdjacentHTML('afterbegin', markUp);
  addToWatchedButton.addEventListener('click', () =>
    addWatchedMoviesInStorage(filmObject)
  );
  addToQueueButton.addEventListener('click', () =>
    addQueueMoviesInStorage(filmObject)
  );
}

export function addWatchedMoviesInStorage(filmObject) {
  const localStorageArr = localStorage.getItem(KEY_WATCHED) || [];
  console.log('Before', localStorageArr);
  console.log('Film', filmObject.id);

  if (!localStorageArr.includes(filmObject.id)) {
    moviesWatchedInLocal.push(filmObject);
    // console.log("In if",moviesWatchedInLocal);

    localStorage.setItem(KEY_WATCHED, JSON.stringify(moviesWatchedInLocal));

    //  getWatchedMoviesInStorage();
  }

  return;
}

export function addQueueMoviesInStorage(filmObject) {
  const localStorageArr = localStorage.getItem(KEY_QUEUE) || [];
  console.log('Before', localStorageArr);
  console.log(filmObject);
  console.log('Цей фільм вже є', localStorageArr.includes(filmObject.id));
  if (!localStorageArr.includes(filmObject.id)) {
    moviesQueueInLocal.push(filmObject);
    // console.log("In if",moviesQueueInLocal);

    localStorage.setItem(KEY_QUEUE, JSON.stringify(moviesQueueInLocal));
    // getQueueMoviesInStorage();
  }
  return;
}
function trimMarkup(trim) {
  const trimMarkup = trim.toFixed(1);
  return trimMarkup;
}
