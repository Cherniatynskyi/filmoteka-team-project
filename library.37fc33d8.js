var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},n=t.parcelRequired7c6;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in a){var n=a[t];delete a[t];var d={id:t,exports:{}};return e[t]=d,n.call(d.exports,d,d.exports),d.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},t.parcelRequired7c6=n);var d=n("diLRM");async function s(t){try{return(await(0,d.getMoviesOnSearch)(`/movie/${t}`,null,1)).data}catch(t){console.error(t)}}//!!!!!!! функція не підключена до index.html
var o=n("9Q9V4");const r=document.querySelector("[data-modalCard-open]"),c=document.querySelector("[data-modalCard-close]"),l=document.querySelector("[data-modalCard]"),i=document.querySelector("[backdrop]"),u=document.querySelector(".card__cont-marking"),m=document.querySelector(".card__table"),f=document.querySelector(".card__button");r.addEventListener("click",(function(t){if(t.target.classList.contains("grid-movie-card")){const e=t.target.attributes.id.value;l.classList.remove("no-activ");document.getElementsByTagName("HTML")[0].classList.add("no-scroll"),s(e).then((t=>function(t){let e=`<img class="card__img" src="http://image.tmdb.org/t/p/w342${t.poster_path}" alt="${t.title}" />`;v=t,u.insertAdjacentHTML("afterbegin",e);const a=b(t.vote_average),n=b(t.popularity);let d,s=t.genres;d=t.genres.length>0?s.map((t=>t.name)):"No information";const o=`<h1 class="card__table-heder">${t.title}</h1>\n      <table class="card__table">\n        <tr class="card__table-vote">\n          <td class="card__table-name ">Vote / Votes</td>\n          <td class="card__table-value "><span class="average">${a}</span> / <span class="vote">${t.vote_count}</span></td>\n        </tr>\n        <tr class="card__table-popularity">\n          <td class="card__table-name">Popularity</td>\n          <td class="card__table-value">${n}</td>\n        </tr>\n        <tr class="card__table-title">\n          <td class="card__table-name">Original Title</td>\n          <td class="card__table-value">${t.title}</td>\n        </tr>\n        <tr class="card__table-genre">\n          <td class="card__table-name last-child">Genre</td>\n          <td class="card__table-value last-child">${d}</td>\n        </tr>\n      </table>\n      <div class="card__about">\n        <h2 class="card__about-heder">About</h2>\n        <p class="card__about-text">${t.overview}</p>\n      </div>`;m.insertAdjacentHTML("afterbegin",o);const r=document.querySelectorAll("[data-add-to]"),c=JSON.parse(localStorage.getItem("watched")),l=JSON.parse(localStorage.getItem("queue"));c&&(c.find((e=>e.id===t.id))?(r[0].textContent="Remove from watched",r[0].classList.remove("add")):(r[0].textContent="Add to watched",r[0].classList.add("add")));l&&(l.find((e=>e.id===t.id))?(r[1].textContent="Remove from queue",r[1].classList.remove("add")):(r[1].textContent="Add to queue",r[1].classList.add("add")));r.forEach((t=>t.addEventListener("click",g)))}(t))).catch((t=>{!function(){const t='<div class="no-film-placeholder">\n        <p>Unfortunatuly, there are no information about this film.</p>\n        <p>Please, choose other!</p>\n      </div>';u.insertAdjacentHTML("afterbegin",t),f.classList.add("visually-hidden")}()}))}return})),c.addEventListener("click",_),l.addEventListener("click",(function(t){if(!t.target.classList.contains("card__cont"))return;_()})),window.addEventListener("keydown",(function(t){"Escape"===t.key&&(_(),i.classList.add("is-hidden"))}));let v=null;function _(){l.classList.add("no-activ"),f.classList.remove("visually-hidden");document.getElementsByTagName("HTML")[0].classList.remove("no-scroll"),u.innerHTML="",m.innerHTML=""}function g(t){const{addTo:e}=t.currentTarget.dataset,a=document.querySelector(`.modal-${e}`);a.classList.contains("add")?(!function(t,e){const a=localStorage.getItem(t);if(!a)return void localStorage.setItem(t,JSON.stringify([e]));let n=JSON.parse(a);n.find((t=>t.id===e.id))||n.push(e),localStorage.setItem(t,JSON.stringify(n))}(e,v),p(e)):(!function(t,e){const a=JSON.parse(localStorage.getItem(t));if(a.find((t=>t.id===e.id))){const n=a.filter((t=>t.id!==e.id));localStorage.setItem(t,JSON.stringify(n))}}(e,v),p(e)),"watched"===e?(0,o.getWatchedMoviesInStorage)():(0,o.getQueueMoviesInStorage)(),a.classList.contains("is-active")}function p(t){const e="modal__btn--active",a=document.querySelector(`.modal-${t}`);if(!a.classList.contains("add"))return a.classList.remove(e),a.classList.add("add"),void(a.textContent="Add to "+t);a.classList.add(e),a.classList.remove("add"),a.textContent="Remove from "+t}function b(t){return t.toFixed(1)}
//# sourceMappingURL=library.37fc33d8.js.map
