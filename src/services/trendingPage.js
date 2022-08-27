import { getMovies } from './getMovies';

getMovies('genre/movie/list', null, 1).then(response => {
  localStorage.setItem('genres', JSON.stringify(response.data.genres));
});

const getAllGenres = localStorage.getItem('genres');
const allGenras = JSON.parse(getAllGenres);
// console.log(allGenras);

const trendingMoviesContainer = document.querySelector('.movie-grid-list');
console.log(trendingMoviesContainer);

async function getTrending() {
  const trendingArray = await getMovies('trending/movie/day', null, 1);
  console.log(trendingArray);
  const trendingLog = trendingArray.data.results;
  renderTrendingMovies(trendingLog);
  // console.log(trendingLog);
  // return trendingLog;
}

function createTrendingCard(moviesArray) {
  const properDate = makeMovieDate(moviesArray.release_date);
  // console.log(moviesArray.genre_ids);
  const properTitle = makeMovieTitle(moviesArray);
  const properGenre = getProperGenre(moviesArray.genre_ids);
  console.log(properGenre);
  return `<li class="grid-movie-card">
  <a href="" class="movie-item">
    <img
      class="movie-img"
      src="https://image.tmdb.org/t/p/w500${moviesArray.poster_path}"
      alt="${properTitle}"
    />
  </a>
  <div class="movie-info">
    <h3 class="movie-title">${properTitle}</h3>
    <p class="movie-genre">
      ${properGenre} | ${properDate}
    </p>
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
    // console.log(idArray[i]);
    allGenras.forEach(genre => {
      if (genre.id === idArray[i]) {
        // console.log(genre.name);
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
