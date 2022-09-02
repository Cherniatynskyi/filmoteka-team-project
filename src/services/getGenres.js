import { getMoviesOnSearch } from './getMovies';

getMoviesOnSearch('genre/movie/list', null, 1).then(response => {
  localStorage.setItem('genres', JSON.stringify(response.data.genres));
});
