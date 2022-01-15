/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */

import { FavoritesBar } from '../Favorites/FavoritesBar';

const imageUrl = 'https://image.tmdb.org/t/p/';

export function Movie({ movie }) {
console.log(movie.poster_path);
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by4">
          <img src={`${imageUrl}/w500/${movie.poster_path}`} alt={movie.title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5">{movie.title}</p>
            <p className="subtitle is-6">{movie.release_date}</p>
            <p className="subtitle is-6" hidden>{movie.id}</p>
          </div>
        </div>
        <FavoritesBar movie={movie} />
        <button class="button is-info is-small">Details</button>
        <div className="content" hidden>
          {movie.overview}
        </div>
      </div>
    </div>
  );
}
