// import { getProperGenre } from './trendingPage';
// import { getMovieByID } from "./MovieObjectByID";

const moviesContainer = document.querySelector(".container");
const moviesListContainer = document.querySelector('.movie-grid-list');
// const btnAddToWatched = document.querySelector(".btn-add-watched");
const btnAddToQueue = document.querySelector(".card__button-text");
const btnGetToWatched = document.querySelector('[data-action ="watched"]');
const btnGetToQueue = document.querySelector('[data-action ="queue"]');



// btnAddToWatched.addEventListener("click", addWatchedMoviesInStorage);
// btnAddToQueue.addEventListener("click", addQueueMoviesInStorage);
// btnGetToWatched.addEventListener("click", addWatchedMoviesInStorage);
// btnGetToQueue.addEventListener("click", getQueueMoviesInStorage);

const warningTextUa = "Нажаль тут ще не має жодного фільму.  Тому спеціально для тебе ми підібрали найпопулярніші фільми. Приємного переглядцу!"
const warningTextEng = " Unfortunately, there is no movie here yet.Therefore, we have selected the most popular movies especially for you.Happy viewing!"

const KEY_WATCHED = "watched-movies-in-storage";
const KEY_QUEUE = "queue-movies-in-storage";
const moviesWatchedInLocal = JSON.parse(localStorage.getItem(KEY_WATCHED)) || [];
const moviesQueueInLocal = JSON.parse(localStorage.getItem(KEY_QUEUE)) || [];


export function getWatchedMoviesInStorage() {
    const markup = moviesWatchedInLocal.map(item => {
        const dateMarkup = getYear(item.release_date);
        const voteMarkup = getRating(item.vote_average);
        // const properTitle = makeMovieTitle(item);
      let properGenre = item.genre_ids;
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
}

export function getQueueMoviesInStorage() {
        const getData = moviesQueueInLocal;
        console.log("getData", getData);
    console.log(JSON.parse(getData.length));
    
   if (getData.length >= 1) {const markup = moviesQueueInLocal.map(item => {
        const dateMarkup = getYear(item.release_date);
        const voteMarkup = getRating(item.vote_average);
        let properGenre = item.genre_ids;
    
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
       moviesContainer.insertAdjacentHTML("beforebegin", `<p>${warningTextUa}</p>
                                                     <p> ${warningTextEng}</p>`);
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


const dateSt = { adult: false,
backdrop_path: "/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg",
genre_ids: [28, 18],
id: 361743,
media_type: "movie",
original_language: "en",
original_title: "Top Gun: Maverick",
overview: "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
popularity: 4724.785,
poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
release_date: "2022-05-24",
title: "Top Gun: Maverick",
video: false,
vote_average: 8.372,
vote_count: 3025,
};

// { adult: false,
// backdrop_path: "/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg",
// genre_ids: [28, 18],
// id: 361743,
// media_type: "movie",
// original_language: "en",
// original_title: "Top Gun: Maverick",
// overview: "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
// popularity: 4724.785,
// poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
// release_date: "2022-05-24",
// title: "Top Gun: Maverick",
// video: false,
// vote_average: 8.372,
// vote_count: 3025,
// }

// {adult: false,
// backdrop_path: "/lbLPVvgq16BD3IA6sIH3riu9ouO.jpg",
// genre_ids: [27, 9648, 878, 53],
// id: 762504,
// media_type: "movie",
// original_language: "en",
// original_title: "Nope",
// overview: "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
// popularity: 1419.195,
// poster_path: "/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
// release_date: "2022-07-20",
// title: "Nope",
// video: false,
// vote_average: 7.094,
// vote_count: 830}
// 

// console.log(moviesQueueInLocal);

export function addWatchedMoviesInStorage(filmObject) {
    const localStorageArr = localStorage.getItem(KEY_WATCHED) || [];
    console.log("Before",localStorageArr);
    if (!localStorageArr.includes(filmObject.id)) {
    moviesWatchedInLocal.push(filmObject);
    console.log("In if",moviesWatchedInLocal);

        localStorage.setItem(KEY_WATCHED, JSON.stringify(moviesWatchedInLocal));
        // localStorage.clear();
        getWatchedMoviesInStorage();
    } else {
      alert("Ти вже переглянув цей фільм");
    }
    return 
}

export function addQueueMoviesInStorage(filmObject) {
    const localStorageArr = localStorage.getItem(KEY_QUEUE) || [];
    console.log("Before",localStorageArr);
    if (!localStorageArr.includes(filmObject.id)) {
    moviesQueueInLocal.push(filmObject);
    console.log("In if",moviesQueueInLocal);

        localStorage.setItem(KEY_QUEUE, JSON.stringify(moviesQueueInLocal));
        // localStorage.clear();
    getWatchedMovieFromStorage();
    } else {
      alert("Фільм вже у черзі на перегляд");
    }
    return 
}


// library.html
// додав обгортку div wrapper

// закоментував
// heder.scss
// .heder {
    // margin-left: auto;
  // margin-right: auto;
// }

// додав
// body.scss
// body {
//     height: 100%;
//     line-height: 1;
// }
// .wraper {
//     min-height: 100%;
//     display: flex;
//     flex-direction: column;
// }

// main {
// flex: 1 1 auto;             
// }