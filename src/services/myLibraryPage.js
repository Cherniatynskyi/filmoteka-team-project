// import { getProperGenre } from './trendingPage';
// import { getMovieByID } from "./MovieObjectByID";
// import {  } from "./modalTemplate";

const moviesContainer = document.querySelector(".container");
const moviesListContainer = document.querySelector('.movie-grid-list');
// const btnAddToWatched = document.querySelector(".btn-add-watched");
// const btnAddToQueue = document.querySelector(".card__button-text");
const btnGetToWatched = document.querySelector('[data-action ="watched"]');
const btnGetToQueue = document.querySelector('[data-action ="queue"]');



// btnAddToWatched.addEventListener("click", addWatchedMoviesInStorage);
// btnAddToQueue.addEventListener("click", addQueueMoviesInStorage);
btnGetToWatched.addEventListener("click", getWatchedMoviesInStorage);
btnGetToQueue.addEventListener("click", getQueueMoviesInStorage);

const warningTextUa = "Нажаль тут ще не має жодного фільму.  Тому спеціально для тебе ми підібрали найпопулярніші фільми. Приємного переглядцу!"
const warningTextEng = " Unfortunately, there is no movie here yet.Therefore, we have selected the most popular movies especially for you.Happy viewing!"

const KEY_WATCHED = "watched-movies-in-storage";
const KEY_QUEUE = "queue-movies-in-storage";
const moviesWatchedInLocal = JSON.parse(localStorage.getItem(KEY_WATCHED)) || [];
const moviesQueueInLocal = JSON.parse(localStorage.getItem(KEY_QUEUE)) || [];

getWatchedMoviesInStorage();

export function getWatchedMoviesInStorage() {
const getData = moviesWatchedInLocal;
        console.log("getData", getData);
    console.log(JSON.parse(getData.length));
    
   if (getData.length >= 1) {const markup = moviesWatchedInLocal.map(item => {
      const dateMarkup = getYear(item.release_date);
      const voteMarkup = getRating(item.vote_average);
     let genrArr = item.genres;
     let properGenre = genrArr.map(genr => genr.name);
    
     properGenre.length === 0 ? properGenre = 'No info' : properGenre;

     properGenre.length >= 2 ? properGenre = properGenre.slice(0, 2).join() + ', Other...' : properGenre;

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
     moviesContainer.innerHTML =  `<p>${warningTextUa}</p>
                                   <p> ${warningTextEng}</p>
                                   <button class="nav-btn" data-btn-home="">
                                   <a href="/index.html">the best here</a>
                                   </button>`;
  }
}


export function getQueueMoviesInStorage() {
        const getData = moviesQueueInLocal;
        console.log("getData", getData);
    console.log(JSON.parse(getData.length));
    
   if (getData.length >= 1) {const markup = moviesQueueInLocal.map(item => {
      const dateMarkup = getYear(item.release_date);
      const voteMarkup = getRating(item.vote_average);
     let genrArr = item.genres;
     let properGenre = genrArr.map(genr => genr.name);
    
     properGenre.length === 0 ? properGenre = 'No info' : properGenre;

     properGenre.length >= 2 ? properGenre = properGenre.slice(0, 2).join() + ', Other...' : properGenre;

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
     moviesContainer.innerHTML =  `<p>${warningTextUa}</p>
                                   <p> ${warningTextEng}</p>
                                   <button class="nav-btn" data-btn-home="">
                                   <a href="/index.html">the best here</a>
                                   </button>`;
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


export function addWatchedMoviesInStorage() {
    const localStorageArr = localStorage.getItem(KEY_WATCHED) || [];
    console.log("Before",localStorageArr);
    if (!localStorageArr.includes(filmObject.id)) {
    moviesWatchedInLocal.push(filmObject);
    console.log("In if",moviesWatchedInLocal);

    localStorage.setItem(KEY_WATCHED, JSON.stringify(moviesWatchedInLocal));
    getWatchedMoviesInStorage();
    }
    return 
}

export function addQueueMoviesInStorage() {
    const localStorageArr = localStorage.getItem(KEY_QUEUE) || [];
    console.log("Before",localStorageArr);
    if (!localStorageArr.includes(filmObject.id)) {
    moviesQueueInLocal.push(filmObject);
    console.log("In if",moviesQueueInLocal);

    localStorage.setItem(KEY_QUEUE, JSON.stringify(moviesQueueInLocal));
    getQueueMoviesInStorage();
    }
    return 
}
