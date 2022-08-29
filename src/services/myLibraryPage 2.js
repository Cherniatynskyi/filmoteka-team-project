// removeItem(key) - видаляє зі сховища запис з ключем key.
// length - кількість записів у сховищі.


// або зрозуміти як витягнути потрібний обєкт і закинути у локал. або зберігати все і діставати по ід ? Метод find() по ід?

// 1. При натисканні на watched і qeueu якщо там пусто писати Тут пусто, щось додай. і рендерити топ фільми
// 2. При натисканні кнопку add to Watched додає у список переглянутих / якщо він там текст змінюється і фільм видаляється
// данні записуються у локал.key - watched - movie
// 3. При натисканні кнопку add to Queue додає у чергу користувача / якщо він там текст змінюється і фільм видаляється
// данні записуються у локал key - queue - movie
// 4. Рендер сторіе

// Нажаль тут ще не має жодного фільму.  Тому спеціально для тебе ми підібрали найпопулярніші фільми. Приємного переглядцу.
// Unfortunately, there is no movie here yet. Therefore, we have selected the most popular movies especially for you. Happy viewing.

// const moviesContainer = document.querySelector(".container");
// const moviesListContainer = document.querySelector('.movie-grid-list');
// const btnAddToWatched = document.querySelector(".btn-add-watched");
// const btnAddToQueue = document.querySelector(".btn-add-queue");
// const btnGetToWatched = document.querySelector(".btn-watched");
// const btnGetToQueue = document.querySelector(".btn-queue");

// btnAddToWatched.addEventListener("click", addWatchedMoviesInStorage);
// btnAddToQueue.addEventListener("click", addQueueMoviesInStorage);
// btnGetToWatched.addEventListener("click", getWatchedMoviesInStorage);
// btnGetToQueue.addEventListener("click", getQueueMovieFromStorageByID);

// const warningText = "Нажаль тут ще не має жодного фільму.  Тому спеціально для тебе ми підібрали найпопулярніші фільми. Приємного переглядцу! Unfortunately, there is no movie here yet. Therefore, we have selected the most popular movies especially for you. Happy viewing!"

// moviesContainer.insertAdjacentHTML("beforebegin", `<p>${warningText}</p>`);

// const KEY_WATCHED = "watched-movies-in-storage";
// const KEY_QUEUE = "queue-movies-in-storage";

// export function addWatchedMoviesInStorage(item)) {
//      const localStorageArr = localStorage.getItem(KEY_WATCHED);
    // if (!localStorageArr.includes(item.ID)) {
    //     localStorage.setItem(KEY_WATCHED, JSON.stringify(queueMovies))
    // } return alert ("Ти вже переглянув цей фільм") ;   
// }

// export function addQueueMoviesInStorage(item) {
// const localStorageArr = localStorage.getItem(KEY_QUEUE);
    // if (!localStorageArr.includes(item.ID)) {
    //     localStorage.setItem(KEY_QUEUE, JSON.stringify(queueMovies))
    // } return alert ("Фільм вже у черзі на перегляд") ;     
// }

// export function getQueueMovieFromStorageByID(id) {
//     try {
//        const getData = JSON.parse(localStorage.getItem(KEY_QUEUE));
//        if (getData) {
            // getData.map((item) => { 
//       const dateMarkup = getYear(item.release_date);
//       const properTitle = makeMovieTitle(item);
//       const properGenre = getProperGenre(item.genre_ids);
//       console.log("item", item);
//       console.log("Helo");
//       return `<li class="grid-movie-card">
//       <a href="" class="movie-item">
//       <div class="img-wrapper">
//         <img
//           class="movie-img"
//           src="http://image.tmdb.org/t/p/w500${item.poster_path}"
//           alt="${item.title}"
//           loading="lazy"
//         />
//         </div>
//         <div class="movie-info">
//           <h3 class="movie-title">${properTitle}</h3>
//           <ul class="thumb">
//             <li class="movie-genre">${properGenre}</li>
//             <li class="movie-date">| ${dateMarkup}</li>
//             <li class="movie-rating">${item.vote_average}</li>
//           </ul>
//         </div>
//       </a>
//     </li>`;

//     })
//     .join('');
//   moviesListContainer.innerHTML = markup; 
//         } else {
//             moviesContainer.insertAdjacentHTML("beforebegin", `<p>${warningText}</p>`);
//        // + render trending page
//         }
// } catch (error) {
//   // Error handling
// }
// }

// export function getWatchedMovieFromStorageByID(id) {
//     try {
//        const getData = JSON.parse(localStorage.getItem(KEY));
//        getData.map((item) => {
//         if (item.id === id) {
//             console.log(id);
//         } else {
//             moviesContainer.insertAdjacentHTML("beforebegin", `<p>${warningText}</p>`);
//         }
//        }) 
// } catch (error) {
//   // Error handling
// }
// }

