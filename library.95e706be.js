function e(e,i,n,t){Object.defineProperty(e,i,{get:n,set:t,enumerable:!0,configurable:!0})}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},l=i.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,i.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,i){t[e]=i},i.parcelRequired7c6=l),l.register("9Q9V4",(function(i,n){e(i.exports,"getWatchedMoviesInStorage",(function(){return r})),e(i.exports,"getQueueMoviesInStorage",(function(){return o}));document.querySelector(".container");const t=document.querySelector(".movie-grid-list"),l=document.querySelector('[data-action ="watched"]'),a=document.querySelector('[data-action ="queue"]');l.addEventListener("click",r),a.addEventListener("click",o);const s=" Unfortunately, there is no movie here yet. Therefore, we have selected the most popular movies especially for you. Happy viewing!";function r(){const e=JSON.parse(localStorage.getItem("watched"))||[],i=e;if(a.classList.remove("current__library-button"),l.classList.add("current__library-button"),i.length>=1){const i=e.map((e=>{const i=c(e.release_date),n=d(e.vote_average);let t=e.genres.map((e=>e.name));return 0===t.length&&(t="No info"),t.length>=2&&(t=t.slice(0,2).join()+", Other..."),e.poster_path?`<li class="grid-movie-card" id="${e.id}">\n      <div class="movie-item">\n      <div class="img-wrapper">\n        <img class="movie-img"\n        src="http://image.tmdb.org/t/p/w500${e.poster_path}" \n        alt="${e.title}"\n        loading="lazy" />\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">${e.original_title}</h3>\n          <ul class="thumb">\n            <li class="movie-genre">${t}</li>\n            <li class="movie-date">| ${i}</li>\n            <li class="movie-rating">${n}</li>\n          </ul>\n        </div>\n      </div>\n    </li>`:`<li class="grid-movie-card" id="${e.id}>\n      <div class="movie-item">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">${e.original_title}</h3>\n          <ul class="thumb">\n            <li class="movie-genre">${t}</li>\n            <li class="movie-date">| ${i}</li>\n            <li class="movie-rating">${n}</li>\n          </ul>\n        </div>\n      </div>\n    </li>`})).join("");t.innerHTML=i}else t.innerHTML=`\n    <div class="warning-container">\n    <p class="warning-title"> ${s}</p>\n    <a class="warning-button" href="./index.html" data-btn-home="">\n        <p class="warning-inside-text">ADD</p>\n        <p class="warning-card-inside-text">+</p>\n    </a>\n  </div>`}function o(){const e=JSON.parse(localStorage.getItem("queue"))||[];if(l.classList.remove("current__library-button"),a.classList.add("current__library-button"),e.length>=1){const i=e.map((e=>{const i=c(e.release_date),n=d(e.vote_average);let t=e.genres.map((e=>e.name));return 0===t.length&&(t="No info"),t.length>=2&&(t=t.slice(0,2).join()+", Other..."),e.poster_path?`<li class="grid-movie-card" id="${e.id}">\n      <div class="movie-item">\n      <div class="img-wrapper">\n        <img class="movie-img"\n        src="http://image.tmdb.org/t/p/w500${e.poster_path}" \n        alt="${e.title}"\n        loading="lazy" />\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">${e.original_title}</h3>\n          <ul class="thumb">\n            <li class="movie-genre">${t}</li>\n            <li class="movie-date">| ${i}</li>\n            <li class="movie-rating">${n}</li>\n          </ul>\n        </div>\n      </div>\n    </li>`:`<li class="grid-movie-card" id="${e.id}>\n      <div class="movie-item">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">${e.original_title}</h3>\n          <ul class="thumb">\n            <li class="movie-genre">${t}</li>\n            <li class="movie-date">| ${i}</li>\n            <li class="movie-rating">${n}</li>\n          </ul>\n        </div>\n      </div>\n    </li>`})).join("");t.innerHTML=i}else t.innerHTML=`\n    <div class="warning-container">\n    <p class="warning-title"> ${s}</p>\n    <a class="warning-button" href="./index.html" data-btn-home="">\n        <p class="warning-inside-text">ADD</p>\n        <p class="warning-card-inside-text">+</p>\n    </a>\n  </div>`}function c(e){return e.split("-")[0]}function d(e){return e.toFixed(2)}r()})),l("9Q9V4");
//# sourceMappingURL=library.95e706be.js.map
