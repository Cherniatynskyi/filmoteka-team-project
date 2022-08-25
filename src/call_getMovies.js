import { getMovies } from './services/getMovies';

getMovies('trending/movie/day', null).then(response =>
  console.log(response.data.results)
);
