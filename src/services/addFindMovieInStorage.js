const KEY = "movies-in-storage";

export function addMoviesInStorage(moviesArray) {
    localStorage.setItem(KEY, JSON.stringify(moviesArray))
}

