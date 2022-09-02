import { getMoviesOnSearch } from "./getMovies";

export async function getMovieByID(id) {
    const nul = null;
    try {
        const movieObj = await getMoviesOnSearch(`/movie/${id}`, nul, 1)
        return movieObj.data
    } catch (error) {
        console.error(error);
    }
}

//!!!!!!! функція не підключена до index.html
// console.log(getMovieByID(990691));


//id-шники для прикладу
// 990691
// 718789
// 453395