<<<<<<< Updated upstream
=======
<<<<<<< HEAD
// const backButton = document.querySelector('#backButton');
// backButton.classList.add('hide');
// const nextButton = document.querySelector('#nextButton');
// let paginationPageNumber = document.querySelector('#paginationPageNumber');

// let page = 1;
// getOption = " ";
=======
>>>>>>> Stashed changes
import { getMovies } from "./services/getMovies";
// import { renderTrendingMovies } from "./services/trendingPage";

const element = document.querySelector(".pagination ul");
let totalPages = 10;
let page = 1;
// let currentPage = 1;
// let searchQuery = '';
<<<<<<< Updated upstream

element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ 
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> ← </span></li>`;
  }
  if(page > 2){ 
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if(page > 3){ 
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

=======
>>>>>>> origin/pagination


<<<<<<< HEAD

// function paginationNavigation(e) {

//   page === 1 || page < 1 ? backButton.classList.add('hide') : backButton.classList.remove('hide');
//   if (e.target.id === "backButton")
//   {
//     page = page - 1;
//     paginationPageNumber.textContent = page;
//     if (getOption === '') {
//       getMovies();
//     }
//     else {
//       fetchFilms();
//     }
//   } else {
//     page = page + 1; paginationPageNumber.textContent = page;
//     if (getOption === '')
//     {
//       getMovies();;
//     } else {
//       getMovies()
//     }
//   }
//   page === 1 || page < 1 ? backButton.classList.add('hide') : backButton.classList.remove('hide');
// }
// backButton.addEventListener('click', paginationNavigation);
//     nextButton.addEventListener('click', paginationNavigation);
=======
>>>>>>> Stashed changes
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
 
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }
  for (let plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { 
      continue;
    }
    if (plength == 0) {
      plength = plength + 1;
    }
    if(page == plength){ 
      active = "active";
    }else{ 
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }
  if(page < totalPages - 1){
    if(page < totalPages - 2){
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }
  if (page < totalPages) { 
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span> → <i class="fas fa-angle-right"></i></span></li>`;
  }
  element.innerHTML = liTag; 
  return liTag; 
}

// element.addEventListener('click', clickNext);

// async function clickNext() {
//   currentPage += 1;
//   const response = await getMovies(searchQuery, currentPage);
//   renderTrendingMovies(response.hits);
//   totalPages += response.hits.length;


// }
<<<<<<< Updated upstream
=======
>>>>>>> origin/pagination
>>>>>>> Stashed changes
