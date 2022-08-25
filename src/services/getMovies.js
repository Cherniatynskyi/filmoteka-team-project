const axios = require('axios').default;

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '144c01915625ec70297b77a615cc2ea7';

//props to getMovies:
//to homePage: searchOption='trending/movie/day', getOption=null;
//search on name: searchOption='search/movie', getOption='searchName' (toLowerCase, in URI encoded (example:'top%20gun%20maverick'));
//get full info on ID: searchOption='movie/movieID', getOption=null;


export const getMovies = async (searchOption, getOption) => {
  try {
    const response = await axios.get(
      `${API_URL}${searchOption}?api_key=${API_KEY}&query=${getOption}`
    );
    return response;
  } catch (error) {
    return console.error(error.message);
  }
};
