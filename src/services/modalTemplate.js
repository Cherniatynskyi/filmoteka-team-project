import { getMovieByID } from "./MovieObjectByID";

const openModalCard = document.querySelector('[data-modalCard-open]');
const closeModalCard = document.querySelector('[data-modalCard-close]');
const modalCardCont = document.querySelector('[data-modalCard]');
const backdrop = document.querySelector('[backdrop]')

openModalCard.addEventListener('click', onOpenModalCard);
closeModalCard.addEventListener('click', onCloseModalCard);
modalCardCont.addEventListener('click', onBackModalDropClick)
window.addEventListener('keydown', onEscClick)

function onOpenModalCard(event) {
  
  if (event.target.classList.contains('grid-movie-card')) {

    const filmID = event.target.attributes.id.value;
    //визиваємо ф-ію, що записує об'єкт фільму у змінну
    const filmObject = getMovieByID(filmID);
    console.log(filmObject);


    modalCardCont.classList.remove('no-activ');
     var htmlEl = document.getElementsByTagName("HTML")[0]
     htmlEl.classList.add('no-scroll');

  } 
  return
}

function onCloseModalCard(event) {
  modalCardCont.classList.add('no-activ');
  var htmlEl = document.getElementsByTagName("HTML")[0]
  htmlEl.classList.remove('no-scroll');
}

function onBackModalDropClick(evt) {
    if (!evt.target.classList.contains('card__cont')) {
      return
    }
    modalCardCont.classList.add('no-activ');
    var htmlEl = document.getElementsByTagName("HTML")[0]
    htmlEl.classList.remove('no-scroll');
}
  
function onEscClick(evt) {
  if (evt.key === 'Escape') {
    onCloseModalCard()
    backdrop.classList.add('is-hidden')
  }
}