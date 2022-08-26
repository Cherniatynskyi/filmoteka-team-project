import { getMovies } from './services/getMovies';

getMovies('search/movie', 'avengers', 3).then(response =>
  console.log(response.data.results)
);
