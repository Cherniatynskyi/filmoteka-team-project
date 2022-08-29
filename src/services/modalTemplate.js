import { getMovieByID } from './MovieObjectByID';

const openModalCard = document.querySelector('[data-modalCard-open]');
const closeModalCard = document.querySelector('[data-modalCard-close]');
const modalCardCont = document.querySelector('[data-modalCard]');
const backdrop = document.querySelector('[backdrop]');
const cardContMarking = document.querySelector('.card__cont-marking');

openModalCard.addEventListener('click', onOpenModalCard);
closeModalCard.addEventListener('click', onCloseModalCard);
modalCardCont.addEventListener('click', onBackModalDropClick);
window.addEventListener('keydown', onEscClick);


function onCloseModalCard() {
  modalCardCont.classList.add('no-activ');
  var htmlEl = document.getElementsByTagName('HTML')[0];
  htmlEl.classList.remove('no-scroll');
  cardContMarking.innerHTML=""
}


function onBackModalDropClick(evt) {
  if (!evt.target.classList.contains('card__cont')) {
    return;
  }
  onCloseModalCard()
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
    const filmObject = getMovieByID(filmID).then(res => cardMarkUp(res));
    console.log(filmObject);

    modalCardCont.classList.remove('no-activ');
    var htmlEl = document.getElementsByTagName('HTML')[0];
    htmlEl.classList.add('no-scroll');
  }
  return;
}
function cardMarkUp(filmObject) {
  const markUP = `<img class="card__img" src="http://image.tmdb.org/t/p/w500${filmObject.poster_path}" alt="${filmObject.title}" />
    <div class="card__table-container">
      <h1 class="card__table-heder">${filmObject.title}</h1>
      <table class="card__table">
        <tr class="card__table-vote">
          <td class="card__table-name">Vote / Votes</td>
          <td class="card__table-value">${filmObject.vote_average}/${filmObject.vote_count}</td>
        </tr>
        <tr class="card__table-popularity">
          <td class="card__table-name">Popularity</td>
          <td class="card__table-value">${filmObject.popularity}</td>
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
      </div>
      <div class="card__button">
        <button class="card__button-text">add to Watched</button>
        <button class="card__button-text">add to queue</button>
      </div>
    </div>`;
  cardContMarking.insertAdjacentHTML('beforeend', markUP);
}
