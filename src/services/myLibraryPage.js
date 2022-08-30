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


export function getWatchedMoviesInStorage() {
  console.log("click");
    const markup = moviesWatchedInLocal.map(item => {
        const dateMarkup = getYear(item.release_date);
        const voteMarkup = getRating(item.vote_average);
        // const properTitle = makeMovieTitle(item);
      let properGenre = item.genres;
    //     if (properGenre.length === 0) {
    //       console.log(properGenre.length);
    //     properGenre = 'No info';
    //   }
        properGenre.length === 0 ? properGenre = 'No info' : properGenre;
    
      if (item.poster_path) {
        return `<li class="grid-movie-card" id="${item.id}">
      <div class="movie-item">
      <div class="img-wrapper">
        <img class="movie-img"
        src="http://image.tmdb.org/t/p/w500${item.poster_path}" 
        alt="${item.title}"
        loading="lazy" />
        </div>
        <div class="movie-info-wrapper">
          <div class="movie-info">
            <h3 class="movie-title">${item.original_title}</h3>
            <ul class="thumb">
              <li class="movie-genre">${properGenre}</li>
              <li class="movie-date">| ${dateMarkup}</li>
              <li class="movie-rating">${voteMarkup}</li>
            </ul>
          </div>
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
}

export function getQueueMoviesInStorage() {
        const getData = moviesQueueInLocal;
        console.log("getData", getData);
    console.log(JSON.parse(getData.length));
    
   if (getData.length >= 1) {const markup = moviesQueueInLocal.map(item => {
        const dateMarkup = getYear(item.release_date);
        const voteMarkup = getRating(item.vote_average);
        let properGenre = item.genres;
    
        properGenre.length === 0 ? properGenre = 'No info' : properGenre;
    
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
        // localStorage.clear();
       getWatchedMoviesInStorage();
    }
    // else {
    //   alert("Ти вже переглянув цей фільм");
    // }
    return 
}

export function addQueueMoviesInStorage() {
    const localStorageArr = localStorage.getItem(KEY_QUEUE) || [];
    console.log("Before",localStorageArr);
    if (!localStorageArr.includes(filmObject.id)) {
    moviesQueueInLocal.push(filmObject);
    console.log("In if",moviesQueueInLocal);

        localStorage.setItem(KEY_QUEUE, JSON.stringify(moviesQueueInLocal));
        // localStorage.clear();
    getQueueMoviesInStorage();
    }
    // else {
    //   alert("Фільм вже у черзі на перегляд");
    // }
    return 
}




// const dateSt = {
//   adult: false,
//   backdrop_path: "/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg",
//   belongs_to_collection: { id: 531330, name: 'Top Gun Collection', poster_path: '/pG4LGdxjNBHbsjMKnPWtkRSJcUv.jpg', backdrop_path: '/eNupRRVv0a4dkVTxOMvG7LhNBaq.jpg' },
//   budget: 170000000,
//   genres:[{ id: 28, name: 'Action' },
//     { id: 18, name: 'Drama' }],
//   homepage: "https://www.topgunmovie.com",
//   id: 361743,
//   imdb_id: "tt1745960",
// };

// function findGenres(dateSt) {
//   console.log(dateSt);
//   console.log(dateSt.genres);
//   const genresP = dateSt.genres;
//   console.log(genresP);
//   const genrArr = genresP.map(genr => genr.name)
 
// console.log(genrArr);
  
// }
// findGenres(dateSt);

// const findGenre = moviesQueueInLocal.map(item => {
//         // const dateMarkup = getYear(item.release_date);
//         // const voteMarkup = getRating(item.vote_average);
//         // let properGenre = item.genres;
//          console.log(dateSt.genres);
//          console.log("Object", Object.values(dateSt.genres));
//   // const genresK = Object.values(filmObject.genres);
//   // console.log("Object ganr", Object.values(genresK));
//     })
//   .join('');