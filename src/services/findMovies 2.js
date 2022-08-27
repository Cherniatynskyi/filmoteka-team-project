const axios = require('axios').default;
import { getMovies } from './getMovies';


const filmSearch = document.querySelector(".film-search");
const moviesListContainer = document.querySelector(".grid-list");

filmSearch, addEventListener("submit", findMovies);

function findMovies(e) {
    e.preventDefault();
    let request = e.target.firstElementChild.value;
    getMovies('search/movie', request, 1)
        .then((response) => {
        console.log(response.data.results);
        clearGalleryList(response)
        })
        .catch(error => console.log(error));
}

export function clearGalleryList(response) {
    if (response.status === 200) {
        moviesListContainer.innerHTML = '';
    }
}


