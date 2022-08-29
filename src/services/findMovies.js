const axios = require('axios').default;
import { getMovies, API_URL, API_KEY } from './getMovies';
import {
  makeMovieTitle,
  getProperGenre,
  paginationNavigation1,
} from './trendingPage';
import { addMoviesInStorage } from './addFindMovieInStorage';

const filmSearch = document.querySelector('.form');
const moviesListContainer = document.querySelector('.movie-grid-list');
const formError = document.querySelector('.form__error');

form.addEventListener('submit', findMovies);
let request;
let page = 1;

async function findMovies(e) {
  paginationPageNumber.textContent = `${page}`;
  backButton.classList.add('hide');
  e.preventDefault();
  request = e.target.firstElementChild.value;
  try {
    const responseArr = await getMovies('search/movie', request, 1);
    errorIsHidden();
    checkAndMarkup(responseArr);

    backButton.removeEventListener('click', paginationNavigation1);
    nextButton.removeEventListener('click', paginationNavigation1);

    backButton.addEventListener('click', paginationNavigation);
    nextButton.addEventListener('click', paginationNavigation);
  } catch (error) {
    console.error(error);
  }
}

export function clearGalleryList(response) {
  if (response.status === 200) {
    moviesListContainer.innerHTML = '';
    return;
  }
  return 'No films';
}

export function checkAndMarkup(responseArr) {
  if (responseArr.data.results.length === 0) {
    formError.classList.remove('is-hidden');
    return;
  } else {
    cardMarkup(responseArr.data.results);
    // addMoviesInStorage(responseArr.data.results);
  }
}

export function cardMarkup(moviesArr) {
  const markup = moviesArr
    .map(item => {
      const dateMarkup = getYear(item.release_date);
      const properTitle = makeMovieTitle(item);
      let properGenre = getProperGenre(item.genre_ids);
      if (!properGenre) {
        properGenre = 'No info';
      }
      if (item.poster_path) {
        return `<li class="grid-movie-card" id="${item.id}">
      <div class="movie-item">
      <div class="img-wrapper">
        <img class="movie-img"
        src="http://image.tmdb.org/t/p/w500${item.poster_path}" 
        alt="${item.title}"
        loading="lazy" />
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${properTitle}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${item.vote_average}</li>
          </ul>
        </div>
      </div>
    </li>`;
      } else {
        return `<li class="grid-movie-card" id="${item.id}>
      <div class="movie-item">
      <div class="img-wrapper img-placeholder">
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${properTitle}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${item.vote_average}</li>
          </ul>
        </div>
      </div>
    </li>`;
      }
    })
    .join('');
  moviesListContainer.innerHTML = markup;
}

function getYear(date) {
  const dateArr = date.split('-');
  return dateArr[0];
}

export function errorIsHidden() {
  if (!formError.classList.contains('is-hidden')) {
    formError.classList.add('is-hidden');
  }
  return;
}

const backButton = document.querySelector('#backButton');
backButton.classList.add('hide');
const nextButton = document.querySelector('#nextButton');
let paginationPageNumber = document.querySelector('#paginationPageNumber');

function paginationNavigation(e) {
  page === 1 || page < 1
    ? backButton.classList.add('hide')
    : backButton.classList.remove('hide');
  if (e.target.id === 'backButton') {
    page = page - 1;
    paginationPageNumber.textContent = page;
    startPagination(page);
  } else {
    page = page + 1;
    paginationPageNumber.textContent = page;
    startPagination(page);
  }
  page === 1 || page < 1
    ? backButton.classList.add('hide')
    : backButton.classList.remove('hide');
}

async function startPagination(page) {
  try {
    const responseArr = await getMovies('search/movie', request, page);
    console.log(responseArr);
    errorIsHidden();
    checkAndMarkup(responseArr);
  } catch (error) {
    console.error(error);
  }
}
