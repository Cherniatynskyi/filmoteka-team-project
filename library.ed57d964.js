!function(){var e=document.querySelector(".container"),n=document.querySelector(".movie-grid-list"),i=document.querySelector('[data-action ="watched"]'),t=document.querySelector('[data-action ="queue"]');i.addEventListener("click",v),t.addEventListener("click",m);var a="Нажаль тут ще не має жодного фільму.  Тому спеціально для тебе ми підібрали найпопулярніші фільми. Приємного переглядцу!",l=" Unfortunately, there is no movie here yet.Therefore, we have selected the most popular movies especially for you.Happy viewing!",o="watched-movies-in-storage",c="queue-movies-in-storage",s=JSON.parse(localStorage.getItem(o))||[],r=JSON.parse(localStorage.getItem(c))||[];function v(){var i=s;if(console.log("getData",i),console.log(JSON.parse(i.length)),i.length>=1){var t=s.map((function(e){var n=d(e.release_date),i=g(e.vote_average),t=e.genres.map((function(e){return e.name}));return 0===t.length&&(t="No info"),t.length>=2&&(t=t.slice(0,2).join()+", Other..."),e.poster_path?'<li class="grid-movie-card" id="'.concat(e.id,'">\n      <div class="movie-item">\n      <div class="img-wrapper">\n        <img class="movie-img"\n        src="http://image.tmdb.org/t/p/w500').concat(e.poster_path,'" \n        alt="').concat(e.title,'"\n        loading="lazy" />\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">').concat(e.original_title,'</h3>\n          <ul class="thumb">\n            <li class="movie-genre">').concat(t,'</li>\n            <li class="movie-date">| ').concat(n,'</li>\n            <li class="movie-rating">').concat(i,"</li>\n          </ul>\n        </div>\n      </div>\n    </li>"):'<li class="grid-movie-card" id="'.concat(e.id,'>\n      <div class="movie-item">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">').concat(e.original_title,'</h3>\n          <ul class="thumb">\n            <li class="movie-genre">').concat(t,'</li>\n            <li class="movie-date">| ').concat(n,'</li>\n            <li class="movie-rating">').concat(i,"</li>\n          </ul>\n        </div>\n      </div>\n    </li>")})).join("");n.innerHTML=t}else e.innerHTML="<p>".concat(a,"</p>\n                                   <p> ").concat(l,'</p>\n                                   <button class="nav-btn" data-btn-home="">\n                                   <a href="/index.html">the best here</a>\n                                   </button>')}function m(){var i=r;if(console.log("getData",i),console.log(JSON.parse(i.length)),i.length>=1){var t=r.map((function(e){var n=d(e.release_date),i=g(e.vote_average),t=e.genres.map((function(e){return e.name}));return 0===t.length&&(t="No info"),t.length>=2&&(t=t.slice(0,2).join()+", Other..."),e.poster_path?'<li class="grid-movie-card" id="'.concat(e.id,'">\n      <div class="movie-item">\n      <div class="img-wrapper">\n        <img class="movie-img"\n        src="http://image.tmdb.org/t/p/w500').concat(e.poster_path,'" \n        alt="').concat(e.title,'"\n        loading="lazy" />\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">').concat(e.original_title,'</h3>\n          <ul class="thumb">\n            <li class="movie-genre">').concat(t,'</li>\n            <li class="movie-date">| ').concat(n,'</li>\n            <li class="movie-rating">').concat(i,"</li>\n          </ul>\n        </div>\n      </div>\n    </li>"):'<li class="grid-movie-card" id="'.concat(e.id,'>\n      <div class="movie-item">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info">\n          <h3 class="movie-title">').concat(e.original_title,'</h3>\n          <ul class="thumb">\n            <li class="movie-genre">').concat(t,'</li>\n            <li class="movie-date">| ').concat(n,'</li>\n            <li class="movie-rating">').concat(i,"</li>\n          </ul>\n        </div>\n      </div>\n    </li>")})).join("");n.innerHTML=t}else e.innerHTML="<p>".concat(a,"</p>\n                                   <p> ").concat(l,'</p>\n                                   <button class="nav-btn" data-btn-home="">\n                                   <a href="/index.html">the best here</a>\n                                   </button>')}function d(e){return e.split("-")[0]}function g(e){return e.toFixed(2)}v()}();
//# sourceMappingURL=library.ed57d964.js.map