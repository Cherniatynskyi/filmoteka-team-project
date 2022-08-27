const axios = require('axios').default;
import { getMovies, API_URL, API_KEY } from './getMovies';


const filmSearch = document.querySelector(".film-search");
const moviesListContainer = document.querySelector(".movie-grid-list");

filmSearch, addEventListener("submit", findMovies);

function findMovies(e) {
    e.preventDefault();
    let request = e.target.firstElementChild.value;
    getMovies('search/movie', request, 1)
      .then((response) => {
          // console.log(response);
            clearGalleryList(response);
            cardMarkup(response.data.results);

        })
        .catch(error => console.log(error));
}

export function clearGalleryList(response) {
    if (response.status === 200) {
        moviesListContainer.innerHTML = '';
        return
    }
    return "No films"
}

function cardMarkup(array) {
    // console.log(array);
  const markup = array.map((item) => {
    const dateMarkup = getYear(item.release_date);
        return `<li class="grid-movie-card">
      <a href="" class="movie-item">
        <img
          class="movie-img"
          src="http://image.tmdb.org/t/p/w500${item.poster_path}"
          alt="${item.title}"
          loading="lazy"
        />
        <div class="movie-info">
          <h3 class="movie-title">${item.original_title}</h3>
          <ul class="thumb">
            <li class="movie-genre">Drama, Action</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${item.vote_average}</li>
          </ul>
        </div>
      </a>
    </li>`
  }).join("")
  moviesListContainer.insertAdjacentHTML("beforeend", markup)
}

function getYear(date) {
  const dateArr = date.split("-");
  return dateArr[0]
}
