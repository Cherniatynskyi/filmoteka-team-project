!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){i[e]=n},n.parcelRequired7c6=a);var s=a("7pbsT"),r=a("2TvXO"),c=a("gEIo3");(0,c.getMovies)("genre/movie/list").then((function(e){localStorage.setItem("genres",JSON.stringify(e.data.genres))}));var o=localStorage.getItem("genres"),l=JSON.parse(o),d=document.querySelector(".movie-grid-list"),u=document.querySelector(".form__error");function v(){return(v=(0,s.default)(e(r).mark((function n(){var t;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.getMovies)("trending/movie/day");case 2:t=e.sent,p(t.data.results),g.addEventListener("click",_),y.addEventListener("click",_);case 7:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function m(e){return e.reduce((function(e,n){return e+(i=(t=n).release_date.slice(0,4),a=h(t),(s=f(t.genre_ids))||(s="No info"),t.poster_path?'<li class="grid-movie-card"  id="'.concat(t.id,'">\n      <div class="movie-item ">\n      <div class="img-wrapper">\n        <img\n          class="movie-img"\n          src="https://image.tmdb.org/t/p/w342').concat(t.poster_path,'"\n          alt="').concat(a,'"\n          loading="lazy"\n        />\n        </div>\n        <div class="movie-info-wrapper">\n          <div class="movie-info data-open">\n            <h3 class="movie-title">').concat(a,'</h3>\n            <ul class="thumb">\n              <li class="movie-genre">').concat(s,'</li>\n              <li class="movie-date">| ').concat(i,"</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>"):'<li class="grid-movie-card"  id="'.concat(t.id,'">\n      <div class="movie-item ">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info-wrapper">\n          <div class="movie-info data-open">\n            <h3 class="movie-title">').concat(a,'</h3>\n            <ul class="thumb">\n              <li class="movie-genre">').concat(s,'</li>\n              <li class="movie-date">| ').concat(i,"</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>"));var t,i,a,s}),"")}function p(e){var n=m(e);d.innerHTML=n}function h(e){return e.hasOwnProperty("title")?e.title:e.name}function f(e){for(var n=function(n){l.forEach((function(i){i.id===e[n]&&t.push(i.name)}))},t=[],i=0;i<e.length;i+=1)n(i);return t.length>2?t.slice(0,2).join()+", Other...":t.join()}!function(){v.apply(this,arguments)}();var g=document.querySelector("#backButton");g.classList.add("hide");var y=document.querySelector("#nextButton"),L=document.querySelector("#paginationPageNumber"),w=1;function _(e){1===w||w<1?g.classList.add("hide"):g.classList.remove("hide"),"backButton"===e.target.id?(w-=1,L.textContent=w,b(w)):(w+=1,L.textContent=w,b(w)),1===w||w<1?g.classList.add("hide"):g.classList.remove("hide")}function b(e){return x.apply(this,arguments)}function x(){return(x=(0,s.default)(e(r).mark((function n(t){return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u.classList.contains("is-hidden")||(document.querySelector(".form__input").value="",u.classList.add("is-hidden")),console.log(t),e.next=5,(0,c.getMoviesOnSearch)("trending/movie/day",null,t);case 5:p(e.sent.data.results),j(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}var k,E,S,M=document.querySelector(".movie-grid-list");function O(){return(O=(0,s.default)(e(r).mark((function n(t){var i;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),k=t.target.firstElementChild.value,e.prev=2,e.next=5,(0,c.getMoviesOnSearch)("search/movie",k,1);case 5:if(i=e.sent,(S=i.data.total_pages)>0&&(w=1),1===w&&g.classList.add("hide"),L.textContent="".concat(w),C(),0!==i.data.results.length){e.next=16;break}return u.classList.remove("is-hidden"),e.abrupt("return");case 16:E=k,q(i.data.results),N(i);case 17:g.removeEventListener("click",_),y.removeEventListener("click",_),g.addEventListener("click",B),y.addEventListener("click",B),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(2),console.error(e.t0);case 26:case"end":return e.stop()}}),n,null,[[2,23]])})))).apply(this,arguments)}function T(e){0!==e.data.results.length?(q(e.data.results),N(e)):u.classList.remove("is-hidden")}function q(e){var n=e.map((function(e){var n=function(e){if(e.hasOwnProperty("release_date")){return e.release_date.split("-")[0]}return""}(e),t=h(e),i=f(e.genre_ids);return i||(i="No info"),e.poster_path?'<li class="grid-movie-card" id="'.concat(e.id,'">\n      <div class="movie-item">\n      <div class="img-wrapper">\n        <img class="movie-img"\n        src="http://image.tmdb.org/t/p/w342').concat(e.poster_path,'" \n        alt="').concat(e.title,'"\n        loading="lazy" />\n        </div>\n        <div class="movie-info-wrapper">\n          <div class="movie-info">\n            <h3 class="movie-title">').concat(t,'</h3>\n            <ul class="thumb">\n              <li class="movie-genre">').concat(i,'</li>\n              <li class="movie-date">| ').concat(n,'</li>\n              <li class="movie-rating">').concat(e.vote_average,"</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>"):'<li class="grid-movie-card" id="'.concat(e.id,'>\n      <div class="movie-item">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info-wrapper">\n          <div class="movie-info">\n            <h3 class="movie-title">').concat(t,'</h3>\n            <ul class="thumb">\n              <li class="movie-genre">').concat(i,'</li>\n              <li class="movie-date">| ').concat(n,'</li>\n              <li class="movie-rating">').concat(e.vote_average,"</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>")})).join("");M.innerHTML=n}function C(){u.classList.contains("is-hidden")||u.classList.add("is-hidden")}function N(e){e.data.total_pages<2&&y.classList.add("hide"),e.data.total_pages>=2&&y.classList.remove("hide")}function j(e){e===S&&y.classList.add("hide")}function B(e){console.log(w),1===w||w<1?g.classList.add("hide"):g.classList.remove("hide"),"backButton"===e.target.id?(w-=1,L.textContent=w,D(w)):(w+=1,L.textContent=w,D(w)),1===w||w<1?g.classList.add("hide"):g.classList.remove("hide")}function D(e){return H.apply(this,arguments)}function H(){return(H=(0,s.default)(e(r).mark((function n(t){var i;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(k),console.log(E),u.classList.contains("is-hidden")||(document.querySelector(".form__input").value=""),e.next=6,(0,c.getMoviesOnSearch)("search/movie",E,t);case 6:i=e.sent,C(),N(i),T(i),j(t),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}form.addEventListener("submit",(function(e){return O.apply(this,arguments)})),g.classList.add("hide");var I=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],F=document.getElementById("tags"),R=[];F.innerHTML="",I.forEach((function(e){var n=document.createElement("div");n.classList.add("tag"),n.id=e.id,n.innerText=e.name,n.addEventListener("click",(function(){var t;n.classList.toggle("highlight"),0==R.length?R.push(e.id):R.includes(e.id)?R.forEach((function(n,t){n==e.id&&R.splice(t,1)})):R.push(e.id),t="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=144c01915625ec70297b77a615cc2ea7&with_genres="+encodeURI(R.join(",")),fetch(t).then((function(e){return e.json()})).then((function(e){p(e.results)}))})),F.append(n)}))}();
//# sourceMappingURL=index.18847afd.js.map
