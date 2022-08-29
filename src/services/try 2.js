import { getMovies } from './getMovies';
import { checkAndMarkup, errorIsHidden, request } from './findMovies';


const backButton = document.querySelector('#backButton');
backButton.classList.add('hide');
const nextButton = document.querySelector('#nextButton');
let paginationPageNumber = document.querySelector('#paginationPageNumber');

let page = 1;
getOption = " ";



function paginationNavigation(e) {
    page === 1 || page < 1 ? backButton.classList.add('hide') : backButton.classList.remove('hide');
  if (e.target.id === "backButton") {
    page = page - 1;
      paginationPageNumber.textContent = page;
      startPagination(page)
    if (getOption === '') {
      getMovies();
    } else {
      fetchFilms();
    }
  } else {
    page = page + 1;
      paginationPageNumber.textContent = page;
      startPagination(page)
    if (getOption === '') {
      getMovies();;
    } else {
     getMovies
    }
  }
   page === 1 || page < 1 ? backButton.classList.add('hide') : backButton.classList.remove('hide');
  startPagination()
}

backButton.addEventListener('click', paginationNavigation);
nextButton.addEventListener('click', paginationNavigation);

// pagination.addEventListener("click", startPagination);

async function startPagination(page) {
    // e.preventDefault();
    // console.log(e);
  try {
      const responseArr = await getMovies('search/movie', request, page);
      console.log(responseArr);
    errorIsHidden();
    checkAndMarkup(responseArr);
  } catch (error) {
    console.error(error);
  }
}