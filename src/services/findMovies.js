const axios = require('axios').default;
<<<<<<< Updated upstream
import { getMovies } from './getMovies';
=======
<<<<<<< HEAD
import { getMovies, API_URL, API_KEY } from './getMovies';
import { makeMovieTitle, getProperGenre } from './trendingPage';
import { addMoviesInStorage, getMovieFromStorageByID } from './addFindMovieInStorage';
>>>>>>> Stashed changes

const filmSearch = document.querySelector('.film-search');
const moviesListContainer = document.querySelector('.movie-grid-list');
const formError = document.querySelector('.form__error');

<<<<<<< Updated upstream
const filmSearch = document.querySelector(".film-search");
const moviesListContainer = document.querySelector(".grid-list");
=======
filmSearch, addEventListener('submit', findMovies);
>>>>>>> Stashed changes

<<<<<<< HEAD
filmSearch, addEventListener("submit", findMovies);

<<<<<<< Updated upstream
function findMovies(e) {
=======
let page = 1
  function findMovies(e) {
>>>>>>> Stashed changes
    e.preventDefault();
    let request = e.target.firstElementChild.value;
    getMovies('search/movie', request, 1)
        .then((response) => {
        console.log(response.data.results);
        clearGalleryList(response)
        })
<<<<<<< Updated upstream
        .catch(error => console.log(error));
=======
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
>>>>>>> 3786642040a6b5cd0ed39f198a8a80cea2aba85f
}
=======
      .catch(error => console.log(error));
    page = 1
  }


>>>>>>> Stashed changes

export function clearGalleryList(response) {
<<<<<<< Updated upstream
    if (response.status === 200) {
        moviesListContainer.innerHTML = '';
    }
}


=======
  if (response.status === 200) {
    moviesListContainer.innerHTML = '';
    return;
  }
  return 'No films';
}

function checkAndMarkup(responseArr) {
  if (responseArr.data.results.length === 0) {
      formError.classList.remove("is-hidden")
      return
    } else {
    cardMarkup(responseArr.data.results);
    addMoviesInStorage(responseArr.data.results);
    }
}

export function cardMarkup(moviesArr) {
  const src = "http://image.tmdb.org/t/p/w500";
  const markup = moviesArr
    .map(item => {
      const dateMarkup = getYear(item.release_date);
      const properTitle = makeMovieTitle(item);
      const properGenre = getProperGenre(item.genre_ids);
      if (item.poster_path) {
        return `<li class="grid-movie-card">
      <a href="" class="movie-item">
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
      </a>
    </li>`;
      } else {
        return `<li class="grid-movie-card">
      <a href="" class="movie-item">
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
      </a>
    </li>`;
      }
    })
    .join('');
  // moviesListContainer.insertAdjacentHTML("beforeend", markup)
  moviesListContainer.innerHTML = markup;
}
// src="http://image.tmdb.org/t/p/w500${item.poster_path}"

// function checkImage(path) {
//   const img = '<img class="movie-img" src="http://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title}" loading="lazy" />'
//   return path ? img : ""; 
// }

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
<<<<<<< Updated upstream

=======
window.addEventListener('scroll', () => {
  const documentRect = document.documentElement.getBoundingClientRect();
  console.log('top', documentRect.top)
    console.log('bottom', documentRect.bottom)
  })
>>>>>>> Stashed changes
=======
import { getMovies } from './getMovies';


const filmSearch = document.querySelector(".film-search");
const moviesListContainer = document.querySelector(".grid-list");

filmSearch, addEventListener("submit", findMovies);

function findMovies(e) {
    e.preventDefault();
    let request = e.target.firstElementChild.value;
    getMovies('search/movie', request, 1)
        .then((response) => {
        console.log(response.data.results);
        clearGalleryList(response)
        })
        .catch(error => console.log(error));
}

export function clearGalleryList(response) {
    if (response.status === 200) {
        moviesListContainer.innerHTML = '';
    }
}


>>>>>>> origin/pagination
>>>>>>> Stashed changes
