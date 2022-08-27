
    
// картка контейнер

<li class="grid-movie-card">
      <a href="" class="movie-item">
      <div class="img-wrapper">
        <img
          class="movie-img"
          src="http://image.tmdb.org/t/p/w500${item.poster_path}"
          alt="${item.title}"
          loading="lazy"
        />
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${properTitle}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${item.vote_average}</li>
          </ul>
        </div>
      </a>
    </li>



