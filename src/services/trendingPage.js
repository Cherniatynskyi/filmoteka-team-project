import { getMovies } from './getMovies';
import { addMoviesInStorage } from './addFindMovieInStorage';

getMovies('genre/movie/list', null, 1).then(response => {
  localStorage.setItem('genres', JSON.stringify(response.data.genres));
});

const getAllGenres = localStorage.getItem('genres');
const allGenras = JSON.parse(getAllGenres);

const trendingMoviesContainer = document.querySelector('.movie-grid-list');

async function getTrending() {
  const trendingArray = await getMovies('trending/movie/day', null, 1);

  const trendingLog = trendingArray.data.results;
  addMoviesInStorage(trendingLog);
  renderTrendingMovies(trendingLog);
}

function createTrendingCard(moviesArray) {
  const properDate = makeMovieDate(moviesArray.release_date);
  const properTitle = makeMovieTitle(moviesArray);
  const properGenre = getProperGenre(moviesArray.genre_ids);
  return `<li class="grid-movie-card">
      <div class="movie-item">
      <div class="img-wrapper">
        <img
          class="movie-img"
          src="https://image.tmdb.org/t/p/w500${moviesArray.poster_path}"
          alt="${properTitle}"
          loading="lazy"
        />
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${properTitle}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${properDate}</li>
          </ul>
        </div>
      </div>
    </li>`;
}

function generateTrendingMoveisMarkup(trendingArray) {
  return trendingArray.reduce(
    (acc, movie) => acc + createTrendingCard(movie),
    ''
  );
}

function renderTrendingMovies(trendingArray) {
  const trendingMovies = generateTrendingMoveisMarkup(trendingArray);
  trendingMoviesContainer.insertAdjacentHTML('beforeend', trendingMovies);
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
