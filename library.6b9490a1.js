!function(){function n(n,i,e,t){Object.defineProperty(n,i,{get:e,set:t,enumerable:!0,configurable:!0})}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},a=i.parcelRequired7c6;null==a&&((a=function(n){if(n in e)return e[n].exports;if(n in t){var i=t[n];delete t[n];var a={id:n,exports:{}};return e[n]=a,i.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(n,i){t[n]=i},i.parcelRequired7c6=a),a.register("9KRxl",(function(i,e){n(i.exports,"getWatchedMoviesInStorage",(function(){return r})),n(i.exports,"getQueueMoviesInStorage",(function(){return o}));document.querySelector(".container");var t=document.querySelector(".movie-grid-list"),a=document.querySelector('[data-action ="watched"]'),l=document.querySelector('[data-action ="queue"]');a.addEventListener("click",r),l.addEventListener("click",o);var c="Sorry, there are no film`s in your Library yet!";function r(){var n=JSON.parse(localStorage.getItem("watched"))||[],i=n;if(l.classList.remove("current__library-button"),a.classList.add("current__library-button"),i.length>=1){var e=n.map((function(n){var i=s(n.release_date),e=d(n.vote_average),t=n.genres.map((function(n){return n.name}));return 0===t.length&&(t="No info"),t.length>=2&&(t=t.slice(0,2).join()+", Other..."),n.poster_path?'<li class="grid-movie-card" id="'.concat(n.id,'">\n      <div class="movie-item">\n      <div class="img-wrapper">\n        <img class="movie-img"\n        src="http://image.tmdb.org/t/p/w500').concat(n.poster_path,'" \n        alt="').concat(n.title,'"\n        loading="lazy" />\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">').concat(n.original_title,'</h3>\n          <ul class="thumb">\n            <li class="movie-genre">').concat(t,'</li>\n            <li class="movie-date">| ').concat(i,'</li>\n            <li class="movie-rating">').concat(e,"</li>\n          </ul>\n        </div>\n      </div>\n    </li>"):'<li class="grid-movie-card" id="'.concat(n.id,'>\n      <div class="movie-item">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">').concat(n.original_title,'</h3>\n          <ul class="thumb">\n            <li class="movie-genre">').concat(t,'</li>\n            <li class="movie-date">| ').concat(i,'</li>\n            <li class="movie-rating">').concat(e,"</li>\n          </ul>\n        </div>\n      </div>\n    </li>")})).join("");t.innerHTML=e}else t.innerHTML='\n    <div class="warning-container">\n    <p class="warning-title"> '.concat(c,'</p>\n    <a class="warning-button" href="./index.html" data-btn-home="">\n        <p class="warning-inside-text">ADD</p>\n        <p class="warning-card-inside-text">+</p>\n    </a>\n  </div>')}function o(){var n=JSON.parse(localStorage.getItem("queue"))||[];if(a.classList.remove("current__library-button"),l.classList.add("current__library-button"),n.length>=1){var i=n.map((function(n){var i=s(n.release_date),e=d(n.vote_average),t=n.genres.map((function(n){return n.name}));return 0===t.length&&(t="No info"),t.length>=2&&(t=t.slice(0,2).join()+", Other..."),n.poster_path?'<li class="grid-movie-card" id="'.concat(n.id,'">\n      <div class="movie-item">\n      <div class="img-wrapper">\n        <img class="movie-img"\n        src="http://image.tmdb.org/t/p/w500').concat(n.poster_path,'" \n        alt="').concat(n.title,'"\n        loading="lazy" />\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">').concat(n.original_title,'</h3>\n          <ul class="thumb">\n            <li class="movie-genre">').concat(t,'</li>\n            <li class="movie-date">| ').concat(i,'</li>\n            <li class="movie-rating">').concat(e,"</li>\n          </ul>\n        </div>\n      </div>\n    </li>"):'<li class="grid-movie-card" id="'.concat(n.id,'>\n      <div class="movie-item">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">').concat(n.original_title,'</h3>\n          <ul class="thumb">\n            <li class="movie-genre">').concat(t,'</li>\n            <li class="movie-date">| ').concat(i,'</li>\n            <li class="movie-rating">').concat(e,"</li>\n          </ul>\n        </div>\n      </div>\n    </li>")})).join("");t.innerHTML=i}else t.innerHTML='\n    <div class="warning-container">\n    <p class="warning-title"> '.concat(c,'</p>\n    <a class="warning-button" href="./index.html" data-btn-home="">\n        <p class="warning-inside-text">ADD</p>\n        <p class="warning-card-inside-text">+</p>\n    </a>\n  </div>')}function s(n){return n.split("-")[0]}function d(n){return n.toFixed(2)}r()})),a("9KRxl")}();
//# sourceMappingURL=library.6b9490a1.js.map