/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */

import { FavoritesBar } from '../Favorites/FavoritesBar';
import { Link } from 'react-router-dom';
import { Genres } from '../Genres';
import { getGenres } from '../../api/getGenres';
import { useMovieGenres } from '../../hooks/useGenres';

const imageUrl = 'https://image.tmdb.org/t/p/';

export function Movie({ movie }) {

const movieGenresMap = useMovieGenres();

  if (!movieGenresMap) {
    return <p>Loading...</p>;
  }

  const genres = movie['genre_ids'].map(
    (genreId) => movieGenresMap[genreId] || 'No'
  );

  console.log(genres);

  return (
    <div className="card">
      <div className="card-image">
        <Link to={`/${movie.id}`}>
          <figure className="image is-3by4">
            <img
              src={`${imageUrl}/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </figure>
        </Link>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5">{movie.title}</p>
            {/* <Genres genresId={movie.genre_ids} /> */}
            <p className="subtitle is-6">{movie.release_date}</p>
            <p className="subtitle is-6" hidden>
              {movie.id}
            </p>
          </div>
        </div>
        <FavoritesBar movie={movie} />
        <div className="content" hidden>
          {movie.overview}
        </div>
      </div>
    </div>
  );
}
