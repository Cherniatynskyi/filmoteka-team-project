const KEY = "movies-in-storage";

export function addMoviesInStorage(moviesArray) {
    localStorage.setItem(KEY, JSON.stringify(moviesArray))
}


// export function getMovieFromStorageByID(id) {
//     const getData = JSON.parse(localStorage.getItem(KEY));
//     getData.map((item) => {
//         if (item.id === id) {
//             console.log(id);
//         }
//     })
    
// }