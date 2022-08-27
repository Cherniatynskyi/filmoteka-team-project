const axios = require('axios').default;
import { getMovies } from './getMovies';


const filmSearch = document.querySelector(".film-search");
const moviesListContainer = document.querySelector(".movie-grid-list");

filmSearch, addEventListener("submit", findMovies);

function findMovies(e) {
    e.preventDefault();
    let request = e.target.firstElementChild.value;
    getMovies('search/movie', request, 1)
      .then((response) => {
          console.log(response);
            // clearGalleryList(response);
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
    console.log(array);
    array.map((item) => {
        return `<li class="grid-movie-card">
      <a href="" class="movie-item">
        <img
          class="movie-img"
          src="./img/Rectangle 5.jpg"
          alt="GREYHOUND"
          loading="lazy"
        />
        <div class="movie-info">
          <h3 class="movie-title">GREYHOUND</h3>
          <ul class="thumb">
            <li class="movie-genre">Drama, Action</li>
            <li class="movie-date">| 2020</li>
            <li class="movie-rating">10.0</li>
          </ul>
        </div>
      </a>
    </li>`
    }).join("")
}


