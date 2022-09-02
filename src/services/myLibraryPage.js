const moviesContainer = document.querySelector('.container');
const moviesListContainer = document.querySelector('.movie-grid-list');
const btnGetToWatched = document.querySelector('[data-action ="watched"]');
const btnGetToQueue = document.querySelector('[data-action ="queue"]');

btnGetToWatched.addEventListener('click', getWatchedMoviesInStorage);
btnGetToQueue.addEventListener('click', getQueueMoviesInStorage);

const warningTextUa =
  'На жаль тут ще не має жодного фільму. Тому спеціально для тебе ми підібрали найпопулярніші фільми. Приємного переглядцу!';
const warningTextEng =
  'Sorry, there are no film`s in your Library yet!';


getWatchedMoviesInStorage();

export function getWatchedMoviesInStorage() {
  const moviesWatchedInLocal =
    JSON.parse(localStorage.getItem('watched')) || [];
  const getData = moviesWatchedInLocal;
  btnGetToQueue.classList.remove('current__library-button');
  btnGetToWatched.classList.add('current__library-button');
  if (getData.length >= 1) {
    const markup = moviesWatchedInLocal
      .map(item => {
        const dateMarkup = getYear(item.release_date);
        const voteMarkup = getRating(item.vote_average);
        let genrArr = item.genres;
        let properGenre = genrArr.map(genr => genr.name);

        properGenre.length === 0 ? (properGenre = 'No info') : properGenre;

        properGenre.length >= 2
          ? (properGenre = properGenre.slice(0, 2).join() + ', Other...')
          : properGenre;

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
          <h3 class="movie-title">${item.original_title}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${voteMarkup}</li>
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
          <h3 class="movie-title">${item.original_title}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${voteMarkup}</li>
          </ul>
        </div>
      </div>
    </li>`;
        }
      })
      .join('');
    moviesListContainer.innerHTML = markup;
  } else {
    moviesListContainer.innerHTML = `
    <div class="warning-container">
    <p class="warning-title"> ${warningTextEng}</p>
    <a class="warning-button" href="./index.html" data-btn-home="">
        <p class="warning-inside-text">ADD</p>
        <p class="warning-card-inside-text">+</p>
    </a>
  </div>`;
  }
}

export function getQueueMoviesInStorage() {
  const moviesQueueInLocal = JSON.parse(localStorage.getItem('queue')) || [];
  const getData = moviesQueueInLocal;
  btnGetToWatched.classList.remove('current__library-button');
  btnGetToQueue.classList.add('current__library-button');
  if (getData.length >= 1) {
    const markup = getData
      .map(item => {
        const dateMarkup = getYear(item.release_date);
        const voteMarkup = getRating(item.vote_average);
        let genrArr = item.genres;
        let properGenre = genrArr.map(genr => genr.name);

        properGenre.length === 0 ? (properGenre = 'No info') : properGenre;

        properGenre.length >= 2
          ? (properGenre = properGenre.slice(0, 2).join() + ', Other...')
          : properGenre;

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
          <h3 class="movie-title">${item.original_title}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${voteMarkup}</li>
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
          <h3 class="movie-title">${item.original_title}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${voteMarkup}</li>
          </ul>
        </div>
      </div>
    </li>`;
        }
      })
      .join('');
    moviesListContainer.innerHTML = markup;
  } else {
    moviesListContainer.innerHTML = `
    <div class="warning-container">
    <p class="warning-title"> ${warningTextEng}</p>
    <a class="warning-button" href="./index.html" data-btn-home="">
        <p class="warning-inside-text">ADD</p>
        <p class="warning-card-inside-text">+</p>
    </a>
  </div>`;
  }
}

function getYear(date) {
  const dateArr = date.split('-');
  return dateArr[0];
}

function getRating(vote) {
  const voteAdapted = vote.toFixed(2);
  return voteAdapted;
}
