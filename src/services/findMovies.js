const axios = require('axios').default;
import { getMovies, API_URL, API_KEY } from './getMovies';
import { makeMovieTitle, getProperGenre } from './trendingPage';

const filmSearch = document.querySelector('.film-search');
const moviesListContainer = document.querySelector('.movie-grid-list');
const formError = document.querySelector('.form__error');

filmSearch, addEventListener('submit', findMovies);

async function findMovies(e) {
  e.preventDefault();
  let request = e.target.firstElementChild.value;
  try {
    const responseArr = await getMovies('search/movie', request, 1);
    errorIsHidden();
    checkAndMarkup(responseArr);
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

function checkAndMarkup(responseArr) {
  if (responseArr.data.results.length === 0) {
    formError.classList.remove('is-hidden');
    return;
  } else {
    cardMarkup(responseArr.data.results);
  }
}

export function cardMarkup(moviesArr) {
  // console.log(array);
  const markup = moviesArr
    .map(item => {
      const dateMarkup = getYear(item.release_date);
      const properTitle = makeMovieTitle(item);
      const properGenre = getProperGenre(item.genre_ids);
      return `<li class="grid-movie-card">
      <a href="" class="movie-item">
      <div class="img-wrapper">
        <img
          class="movie-img"
          src="http://image.tmdb.org/t/p/w500${item.poster_path}"
          alt="${item.title}"
          loading="lazy"
        />
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${properTitle}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${item.vote_average}</li>
          </ul>
        </div>
      </a>
    </li>`;
    })
    .join('');
  // moviesListContainer.insertAdjacentHTML("beforeend", markup)
  moviesListContainer.innerHTML = markup;
}

export function getYear(date) {
  const dateArr = date.split('-');
  return dateArr[0];
}

function errorIsHidden() {
  if (!formError.classList.contains('is-hidden')) {
    formError.classList.add('is-hidden');
  }
  return;
}
