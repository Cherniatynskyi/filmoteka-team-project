import { getMovies } from './getMovies';
import { addMoviesInStorage } from './addFindMovieInStorage';
import { checkAndMarkup, cardMarkup } from './findMovies';

getMovies('genre/movie/list', null, 1).then(response => {
  localStorage.setItem('genres', JSON.stringify(response.data.genres));
});

const getAllGenres = localStorage.getItem('genres');
const allGenras = JSON.parse(getAllGenres);
const nul = null;

const trendingMoviesContainer = document.querySelector('.movie-grid-list');

async function getTrending() {
  const trendingArray = await getMovies('trending/movie/day', nul, 1);

  const trendingLog = trendingArray.data.results;
  addMoviesInStorage(trendingLog);
  renderTrendingMovies(trendingLog);

  backButton.addEventListener('click', paginationNavigation1);
  nextButton.addEventListener('click', paginationNavigation1);

  // backButton.removeEventListener('click', paginationNavigation)
  // nextButton.removeEventListener('click', paginationNavigation);
}

function createTrendingCard(moviesArray) {
  const properDate = makeMovieDate(moviesArray.release_date);
  const properTitle = makeMovieTitle(moviesArray);
  let properGenre = getProperGenre(moviesArray.genre_ids);
  if (!properGenre) {
    properGenre = 'No info';
  }
  if (moviesArray.poster_path) {
    return `<li class="grid-movie-card"  id="${moviesArray.id}">
      <div class="movie-item ">
      <div class="img-wrapper">
        <img
          class="movie-img"
          src="https://image.tmdb.org/t/p/w500${moviesArray.poster_path}"
          alt="${properTitle}"
          loading="lazy"
        />
        </div>
        <div class="movie-info data-open">
          <h3 class="movie-title">${properTitle}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${properDate}</li>
          </ul>
        </div>
      </div>
    </li>`;
  } else {
    return `<li class="grid-movie-card"  id="${moviesArray.id}">
      <div class="movie-item ">
      <div class="img-wrapper img-placeholder">
        </div>
        <div class="movie-info data-open">
          <h3 class="movie-title">${properTitle}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${properDate}</li>
          </ul>
        </div>
      </div>
    </li>`;
  }
}

function generateTrendingMoveisMarkup(trendingArray) {
  return trendingArray.reduce(
    (acc, movie) => acc + createTrendingCard(movie),
    ''
  );
}

function renderTrendingMovies(trendingArray) {
  const trendingMovies = generateTrendingMoveisMarkup(trendingArray);
  // trendingMoviesContainer.insertAdjacentHTML('beforeend', trendingMovies);
  trendingMoviesContainer.innerHTML = trendingMovies;
}

function makeMovieDate(date) {
  const fitDate = date.slice(0, 4);
  return fitDate;
}

export function makeMovieTitle(trendingMovie) {
  if (trendingMovie.hasOwnProperty('title')) {
    return trendingMovie.title;
  }
  return trendingMovie.name;
}

export function getProperGenre(idArray) {
  const correctGenres = [];
  for (let i = 0; i < idArray.length; i += 1) {
    allGenras.forEach(genre => {
      if (genre.id === idArray[i]) {
        correctGenres.push(genre.name);
      }
    });
  }
  if (correctGenres.length > 2) {
    return correctGenres.slice(0, 1).join() + ',Other';
  }
  return correctGenres.join();
}

getTrending();

const backButton = document.querySelector('#backButton');
backButton.classList.add('hide');
const nextButton = document.querySelector('#nextButton');
let paginationPageNumber = document.querySelector('#paginationPageNumber');

let page = 1;

export function paginationNavigation1(e) {
  page === 1 || page < 1
    ? backButton.classList.add('hide')
    : backButton.classList.remove('hide');
  if (e.target.id === 'backButton') {
    page = page - 1;
    paginationPageNumber.textContent = page;
    startPaginationTranding(page);
  } else {
    page = page + 1;
    paginationPageNumber.textContent = page;
    startPaginationTranding(page);
  }
  page === 1 || page < 1
    ? backButton.classList.add('hide')
    : backButton.classList.remove('hide');
}

async function startPaginationTranding(page) {
  try {
    const responseArr = await getMovies('trending/movie/day', nul, page);
    renderTrendingMovies(responseArr.data.results);
  } catch (error) {
    console.error(error);
  }
}
