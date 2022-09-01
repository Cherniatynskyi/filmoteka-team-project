// const axios = require('axios').default;
// import { getMovies, API_URL, API_KEY } from './getMovies';
// import {
//   makeMovieTitle,
//   getProperGenre,
//   paginationNavigation1
// } from './trendingPage';


// const moviesListContainer = document.querySelector('.movie-grid-list');
// const formError = document.querySelector('.form__error');
// const backButton = document.querySelector('#backButton');
// const nextButton = document.querySelector('#nextButton');
// let paginationPageNumber = document.querySelector('#paginationPageNumber');


// form.addEventListener('submit', findMovies);
// let request;
// let previousRequest;
// let pageInFind;
// let totalPages

// async function findMovies(e) {
//   e.preventDefault();
//   request = e.target.firstElementChild.value;
//   try {
//     const responseArr = await getMovies('search/movie', request, 1);
//     totalPages = responseArr.data.total_pages;
//     if (totalPages > 0) {
//       pageInFind = 1;
//     } if (pageInFind === 1) {
//     backButton.classList.add('hide');
//     }

//     paginationPageNumber.textContent = `${pageInFind}`;
//     errorIsHidden();

//     if (responseArr.data.results.length === 0) {
//     formError.classList.remove('is-hidden');
//     return
//     } else {
//     previousRequest = request;
//     cardMarkup(responseArr.data.results);
//     checkPages(responseArr);
//   }

//     backButton.removeEventListener('click', paginationNavigation1);
//     nextButton.removeEventListener('click', paginationNavigation1);

//     backButton.addEventListener('click', paginationNavigation);
//     nextButton.addEventListener('click', paginationNavigation);
//   } catch (error) {
//     console.error(error);
//   }
// }

// export function clearGalleryList(response) {
//   if (response.status === 200) {
//     moviesListContainer.innerHTML = '';
//     return;
//   }
//   return 'No films';
// }

// export function checkAndMarkup(responseArr) {
//   if (responseArr.data.results.length === 0) {
//     formError.classList.remove('is-hidden');
//     return
//   } else {
//     cardMarkup(responseArr.data.results);
//     checkPages(responseArr);
//   }
// }

// export function cardMarkup(moviesArr) {
//   const markup = moviesArr
//     .map(item => {
//       const dateMarkup = getYear(item);
//       const properTitle = makeMovieTitle(item);
//       let properGenre = getProperGenre(item.genre_ids);
//       if (!properGenre) {
//         properGenre = 'No info';
//       }
//       if (item.poster_path) {
//         return `<li class="grid-movie-card" id="${item.id}">
//       <div class="movie-item">
//       <div class="img-wrapper">
//         <img class="movie-img"
//         src="http://image.tmdb.org/t/p/w500${item.poster_path}" 
//         alt="${item.title}"
//         loading="lazy" />
//         </div>
//         <div class="movie-info-wrapper">
//           <div class="movie-info">
//             <h3 class="movie-title">${properTitle}</h3>
//             <ul class="thumb">
//               <li class="movie-genre">${properGenre}</li>
//               <li class="movie-date">| ${dateMarkup}</li>
//               <li class="movie-rating">${item.vote_average}</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </li>`;
//       } else {
//         return `<li class="grid-movie-card" id="${item.id}>
//       <div class="movie-item">
//       <div class="img-wrapper img-placeholder">
//         </div>
//         <div class="movie-info-wrapper">
//           <div class="movie-info">
//             <h3 class="movie-title">${properTitle}</h3>
//             <ul class="thumb">
//               <li class="movie-genre">${properGenre}</li>
//               <li class="movie-date">| ${dateMarkup}</li>
//               <li class="movie-rating">${item.vote_average}</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </li>`;
//       }
//     })
//     .join('');
//   moviesListContainer.innerHTML = markup;
// }

// function getYear(item) {
//   if (item.hasOwnProperty("release_date")) {
//     const dateArr = item.release_date.split('-');
//     return dateArr[0];
//   }
//   return ""
// }

// export function errorIsHidden() {
//   if (!formError.classList.contains('is-hidden')) {
//     formError.classList.add('is-hidden');
//   }
// }

// function checkPages(arr) {
//   if (arr.data.total_pages < 2) {
//     nextButton.classList.add('hide')
//     // paginadionThumb.classList.add("visually-hidden")
//   } if (arr.data.total_pages >= 2) {
//     nextButton.classList.remove('hide')
//     // paginadionThumb.classList.remove("visually-hidden")
//   }
// }
// export function checkLastPage(page) {
//   if (page === totalPages) {
//     nextButton.classList.add('hide')
//   }
// }


// ////////////////////////////////////////////////////////////////////

// backButton.classList.add('hide');


// function paginationNavigation(e) {
//   console.log(pageInFind);
//   pageInFind === 1 || pageInFind < 1
//     ? backButton.classList.add('hide')
//     : backButton.classList.remove('hide');
//   if (e.target.id === 'backButton') {
//     pageInFind = pageInFind - 1;
//     paginationPageNumber.textContent = pageInFind;
//     startPagination(pageInFind);
//   } else {
//     pageInFind = pageInFind + 1;
//     paginationPageNumber.textContent = pageInFind;
//     startPagination(pageInFind);
//   }
//   pageInFind === 1 || pageInFind < 1
//     ? backButton.classList.add('hide')
//     : backButton.classList.remove('hide');
// }

// async function startPagination(page) {
//   try {
//     console.log(request);
//     console.log(previousRequest);
//     if (!formError.classList.contains('is-hidden')) {
//       document.querySelector(".form__input").value = "";
//     }
//     const responseArr = await getMovies('search/movie', previousRequest, page);
 
//     errorIsHidden();
//     checkPages(responseArr);
//     checkAndMarkup(responseArr);
//     checkLastPage(page)
//   } catch (error) {
//     console.error(error);
//   }
// }