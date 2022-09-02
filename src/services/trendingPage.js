import { getMovies } from './getMovies';
import { addMoviesInStorage } from './addFindMovieInStorage';
// import { checkAndMarkup, cardMarkup, checkPages, checkLastPage } from './findMovies';

getMovies('genre/movie/list', null, 1).then(response => {
  localStorage.setItem('genres', JSON.stringify(response.data.genres));
});

const getAllGenres = localStorage.getItem('genres');
const allGenras = JSON.parse(getAllGenres);
const nul = null;

const trendingMoviesContainer = document.querySelector('.movie-grid-list');
const formError = document.querySelector('.form__error');

async function getTrending() {
  const trendingArray = await getMovies('trending/movie/day', nul, 1);
  const trendingLog = trendingArray.data.results;
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
        <div class="movie-info-wrapper">
          <div class="movie-info data-open">
            <h3 class="movie-title">${properTitle}</h3>
            <ul class="thumb">
              <li class="movie-genre">${properGenre}</li>
              <li class="movie-date">| ${properDate}</li>
            </ul>
          </div>
        </div>
      </div>
    </li>`;
  } else {
    return `<li class="grid-movie-card"  id="${moviesArray.id}">
      <div class="movie-item ">
      <div class="img-wrapper img-placeholder">
        </div>
        <div class="movie-info-wrapper">
          <div class="movie-info data-open">
            <h3 class="movie-title">${properTitle}</h3>
            <ul class="thumb">
              <li class="movie-genre">${properGenre}</li>
              <li class="movie-date">| ${properDate}</li>
            </ul>
          </div>
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

export function renderTrendingMovies(trendingArray) {
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
    return correctGenres.slice(0, 2).join() + ', Other...';
  }
  return correctGenres.join();
}

getTrending();

const backButton = document.querySelector('#backButton');
backButton.classList.add('hide');
const nextButton = document.querySelector('#nextButton');
let paginationPageNumber = document.querySelector('#paginationPageNumber');

export let page = 1;

export function paginationNavigation1(e) {
  // debugger
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
  // console.log(page);
  try {
    if (!formError.classList.contains('is-hidden')) {
      document.querySelector(".form__input").value = "";
      formError.classList.add('is-hidden')
      
    }
    console.log(page);
    const responseArr = await getMovies('trending/movie/day', nul, page);
    // checkPages(responseArr);
    renderTrendingMovies(responseArr.data.results);
    checkLastPage(page)
  } catch (error) {
    console.error(error);
  }
}


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
const moviesListContainer = document.querySelector('.movie-grid-list');


form.addEventListener('submit', findMovies);
let request;
let previousRequest;
let totalPages

async function findMovies(e) {
  e.preventDefault();
  request = e.target.firstElementChild.value;
  try {
    const responseArr = await getMovies('search/movie', request, 1);
    totalPages = responseArr.data.total_pages;
    if (totalPages > 0) {
      page = 1;
    } if (page === 1) {
    backButton.classList.add('hide');
    }

    paginationPageNumber.textContent = `${page}`;
    errorIsHidden();

    if (responseArr.data.results.length === 0) {
    formError.classList.remove('is-hidden');
    return
    } else {
    previousRequest = request;
    cardMarkup(responseArr.data.results);
    checkPages(responseArr);
  }

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
    return
  } else {
    cardMarkup(responseArr.data.results);
    checkPages(responseArr);
  }
}

export function cardMarkup(moviesArr) {
  const markup = moviesArr
    .map(item => {
      const dateMarkup = getYear(item);
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
        <div class="movie-info-wrapper">
          <div class="movie-info">
            <h3 class="movie-title">${properTitle}</h3>
            <ul class="thumb">
              <li class="movie-genre">${properGenre}</li>
              <li class="movie-date">| ${dateMarkup}</li>
              <li class="movie-rating">${item.vote_average}</li>
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
        <div class="movie-info-wrapper">
          <div class="movie-info">
            <h3 class="movie-title">${properTitle}</h3>
            <ul class="thumb">
              <li class="movie-genre">${properGenre}</li>
              <li class="movie-date">| ${dateMarkup}</li>
              <li class="movie-rating">${item.vote_average}</li>
            </ul>
          </div>
        </div>
      </div>
    </li>`;
      }
    })
    .join('');
  moviesListContainer.innerHTML = markup;
}

function getYear(item) {
  if (item.hasOwnProperty("release_date")) {
    const dateArr = item.release_date.split('-');
    return dateArr[0];
  }
  return ""
}

export function errorIsHidden() {
  if (!formError.classList.contains('is-hidden')) {
    formError.classList.add('is-hidden');
  }
}

function checkPages(arr) {
  if (arr.data.total_pages < 2) {
    nextButton.classList.add('hide')
  } if (arr.data.total_pages >= 2) {
    nextButton.classList.remove('hide')
  }
}
export function checkLastPage(page) {
  if (page === totalPages) {
    nextButton.classList.add('hide')
  }
}


////////////////////////////////////////////////////////////////////

backButton.classList.add('hide');


function paginationNavigation(e) {
  console.log(page);
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
    console.log(request);
    console.log(previousRequest);
    if (!formError.classList.contains('is-hidden')) {
      document.querySelector(".form__input").value = "";
    }
    const responseArr = await getMovies('search/movie', previousRequest, page);
 
    errorIsHidden();
    checkPages(responseArr);
    checkAndMarkup(responseArr);
    checkLastPage(page)
  } catch (error) {
    console.error(error);
  }
}