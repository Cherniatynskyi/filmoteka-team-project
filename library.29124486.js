const e=document.querySelector(".container"),i=document.querySelector(".movie-grid-list"),n=document.querySelector('[data-action ="watched"]'),l=document.querySelector('[data-action ="queue"]');n.addEventListener("click",r),l.addEventListener("click",c);const t="Нажаль тут ще не має жодного фільму.  Тому спеціально для тебе ми підібрали найпопулярніші фільми. Приємного переглядцу!",a=" Unfortunately, there is no movie here yet.Therefore, we have selected the most popular movies especially for you.Happy viewing!",s=JSON.parse(localStorage.getItem("watched-movies-in-storage"))||[],o=JSON.parse(localStorage.getItem("queue-movies-in-storage"))||[];function r(){const n=s;if(console.log("getData",n),console.log(JSON.parse(n.length)),n.length>=1){const e=s.map((e=>{const i=m(e.release_date),n=d(e.vote_average);let l=e.genres.map((e=>e.name));return 0===l.length&&(l="No info"),l.length>=2&&(l=l.slice(0,2).join()+", Other..."),e.poster_path?`<li class="grid-movie-card" id="${e.id}">\n      <div class="movie-item">\n      <div class="img-wrapper">\n        <img class="movie-img"\n        src="http://image.tmdb.org/t/p/w500${e.poster_path}" \n        alt="${e.title}"\n        loading="lazy" />\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">${e.original_title}</h3>\n          <ul class="thumb">\n            <li class="movie-genre">${l}</li>\n            <li class="movie-date">| ${i}</li>\n            <li class="movie-rating">${n}</li>\n          </ul>\n        </div>\n      </div>\n    </li>`:`<li class="grid-movie-card" id="${e.id}>\n      <div class="movie-item">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">${e.original_title}</h3>\n          <ul class="thumb">\n            <li class="movie-genre">${l}</li>\n            <li class="movie-date">| ${i}</li>\n            <li class="movie-rating">${n}</li>\n          </ul>\n        </div>\n      </div>\n    </li>`})).join("");i.innerHTML=e}else e.innerHTML=`<p>${t}</p>\n                                   <p> ${a}</p>\n                                   <button class="nav-btn" data-btn-home="">\n                                   <a href="/index.html">the best here</a>\n                                   </button>`}function c(){const n=o;if(console.log("getData",n),console.log(JSON.parse(n.length)),n.length>=1){const e=o.map((e=>{const i=m(e.release_date),n=d(e.vote_average);let l=e.genres.map((e=>e.name));return 0===l.length&&(l="No info"),l.length>=2&&(l=l.slice(0,2).join()+", Other..."),e.poster_path?`<li class="grid-movie-card" id="${e.id}">\n      <div class="movie-item">\n      <div class="img-wrapper">\n        <img class="movie-img"\n        src="http://image.tmdb.org/t/p/w500${e.poster_path}" \n        alt="${e.title}"\n        loading="lazy" />\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">${e.original_title}</h3>\n          <ul class="thumb">\n            <li class="movie-genre">${l}</li>\n            <li class="movie-date">| ${i}</li>\n            <li class="movie-rating">${n}</li>\n          </ul>\n        </div>\n      </div>\n    </li>`:`<li class="grid-movie-card" id="${e.id}>\n      <div class="movie-item">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">${e.original_title}</h3>\n          <ul class="thumb">\n            <li class="movie-genre">${l}</li>\n            <li class="movie-date">| ${i}</li>\n            <li class="movie-rating">${n}</li>\n          </ul>\n        </div>\n      </div>\n    </li>`})).join("");i.innerHTML=e}else e.innerHTML=`<p>${t}</p>\n                                   <p> ${a}</p>\n                                   <button class="nav-btn" data-btn-home="">\n                                   <a href="/index.html">the best here</a>\n                                   </button>`}function m(e){return e.split("-")[0]}function d(e){return e.toFixed(2)}r();
//# sourceMappingURL=library.29124486.js.map