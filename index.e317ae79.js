!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){i[e]=n},n.parcelRequired7c6=a);var s=a("7pbsT"),r=a("2TvXO"),c=a("gEIo3");(0,c.getMovies)("genre/movie/list",null,1).then((function(e){localStorage.setItem("genres",JSON.stringify(e.data.genres))}));var o=localStorage.getItem("genres"),l=JSON.parse(o),d=null,u=document.querySelector(".movie-grid-list"),v=document.querySelector(".form__error");function m(){return(m=(0,s.default)(e(r).mark((function n(){var t;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.getMovies)("trending/movie/day",d,1);case 2:t=e.sent,f(t.data.results),y.addEventListener("click",b),L.addEventListener("click",b);case 7:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function p(e){return e.reduce((function(e,n){return e+(i=(t=n).release_date.slice(0,4),a=h(t),(s=g(t.genre_ids))||(s="No info"),t.poster_path?'<li class="grid-movie-card"  id="'.concat(t.id,'">\n      <div class="movie-item ">\n      <div class="img-wrapper">\n        <img\n          class="movie-img"\n          src="https://image.tmdb.org/t/p/w500').concat(t.poster_path,'"\n          alt="').concat(a,'"\n          loading="lazy"\n        />\n        </div>\n        <div class="movie-info-wrapper">\n          <div class="movie-info data-open">\n            <h3 class="movie-title">').concat(a,'</h3>\n            <ul class="thumb">\n              <li class="movie-genre">').concat(s,'</li>\n              <li class="movie-date">| ').concat(i,"</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>"):'<li class="grid-movie-card"  id="'.concat(t.id,'">\n      <div class="movie-item ">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info-wrapper">\n          <div class="movie-info data-open">\n            <h3 class="movie-title">').concat(a,'</h3>\n            <ul class="thumb">\n              <li class="movie-genre">').concat(s,'</li>\n              <li class="movie-date">| ').concat(i,"</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>"));var t,i,a,s}),"")}function f(e){var n=p(e);u.innerHTML=n}function h(e){return e.hasOwnProperty("title")?e.title:e.name}function g(e){for(var n=function(n){l.forEach((function(i){i.id===e[n]&&t.push(i.name)}))},t=[],i=0;i<e.length;i+=1)n(i);return t.length>=2?t.slice(0,2).join()+", Other...":t.join()}!function(){m.apply(this,arguments)}();var y=document.querySelector("#backButton");y.classList.add("hide");var L=document.querySelector("#nextButton"),w=document.querySelector("#paginationPageNumber"),_=1;function b(e){1===_||_<1?y.classList.add("hide"):y.classList.remove("hide"),"backButton"===e.target.id?(_-=1,w.textContent=_,x(_)):(_+=1,w.textContent=_,x(_)),1===_||_<1?y.classList.add("hide"):y.classList.remove("hide")}function x(e){return k.apply(this,arguments)}function k(){return(k=(0,s.default)(e(r).mark((function n(t){return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v.classList.contains("is-hidden")||(document.querySelector(".form__input").value="",v.classList.add("is-hidden")),console.log(t),e.next=5,(0,c.getMovies)("trending/movie/day",d,t);case 5:f(e.sent.data.results),B(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}var E,M,S,T=document.querySelector(".movie-grid-list");function q(){return(q=(0,s.default)(e(r).mark((function n(t){var i;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E=t.target.firstElementChild.value,e.prev=2,e.next=5,(0,c.getMovies)("search/movie",E,1);case 5:if(i=e.sent,(S=i.data.total_pages)>0&&(_=1),1===_&&y.classList.add("hide"),w.textContent="".concat(_),N(),0!==i.data.results.length){e.next=16;break}return v.classList.remove("is-hidden"),e.abrupt("return");case 16:M=E,O(i.data.results),j(i);case 17:y.removeEventListener("click",b),L.removeEventListener("click",b),y.addEventListener("click",D),L.addEventListener("click",D),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(2),console.error(e.t0);case 26:case"end":return e.stop()}}),n,null,[[2,23]])})))).apply(this,arguments)}function C(e){0!==e.data.results.length?(O(e.data.results),j(e)):v.classList.remove("is-hidden")}function O(e){var n=e.map((function(e){var n=function(e){if(e.hasOwnProperty("release_date")){return e.release_date.split("-")[0]}return""}(e),t=h(e),i=g(e.genre_ids);return i||(i="No info"),e.poster_path?'<li class="grid-movie-card" id="'.concat(e.id,'">\n      <div class="movie-item">\n      <div class="img-wrapper">\n        <img class="movie-img"\n        src="http://image.tmdb.org/t/p/w500').concat(e.poster_path,'" \n        alt="').concat(e.title,'"\n        loading="lazy" />\n        </div>\n        <div class="movie-info-wrapper">\n          <div class="movie-info">\n            <h3 class="movie-title">').concat(t,'</h3>\n            <ul class="thumb">\n              <li class="movie-genre">').concat(i,'</li>\n              <li class="movie-date">| ').concat(n,'</li>\n              <li class="movie-rating">').concat(e.vote_average,"</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>"):'<li class="grid-movie-card" id="'.concat(e.id,'>\n      <div class="movie-item">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info-wrapper">\n          <div class="movie-info">\n            <h3 class="movie-title">').concat(t,'</h3>\n            <ul class="thumb">\n              <li class="movie-genre">').concat(i,'</li>\n              <li class="movie-date">| ').concat(n,'</li>\n              <li class="movie-rating">').concat(e.vote_average,"</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>")})).join("");T.innerHTML=n}function N(){v.classList.contains("is-hidden")||v.classList.add("is-hidden")}function j(e){e.data.total_pages<2&&L.classList.add("hide"),e.data.total_pages>=2&&L.classList.remove("hide")}function B(e){e===S&&L.classList.add("hide")}function D(e){console.log(_),1===_||_<1?y.classList.add("hide"):y.classList.remove("hide"),"backButton"===e.target.id?(_-=1,w.textContent=_,H(_)):(_+=1,w.textContent=_,H(_)),1===_||_<1?y.classList.add("hide"):y.classList.remove("hide")}function H(e){return I.apply(this,arguments)}function I(){return(I=(0,s.default)(e(r).mark((function n(t){var i;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(E),console.log(M),v.classList.contains("is-hidden")||(document.querySelector(".form__input").value=""),e.next=6,(0,c.getMovies)("search/movie",M,t);case 6:i=e.sent,N(),j(i),C(i),B(t),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}form.addEventListener("submit",(function(e){return q.apply(this,arguments)})),y.classList.add("hide");var F=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],R=document.getElementById("tags"),A=[];R.innerHTML="",F.forEach((function(e){var n=document.createElement("div");n.classList.add("tag"),n.id=e.id,n.innerText=e.name,n.addEventListener("click",(function(){var t;n.classList.toggle("highlight"),0==A.length?A.push(e.id):A.includes(e.id)?A.forEach((function(n,t){n==e.id&&A.splice(t,1)})):A.push(e.id),t="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=144c01915625ec70297b77a615cc2ea7&with_genres="+encodeURI(A.join(",")),fetch(t).then((function(e){return e.json()})).then((function(e){f(e.results)}))})),R.append(n)}))}();
//# sourceMappingURL=index.e317ae79.js.map
