/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import { React, useEffect, useState } from 'react';
// import PropTypes, { string } from 'prop-types';
import { saveToFavorites } from '../Favorites/saveToFavorites';
import { removeFromFav } from '../Favorites/removeFromFav';

const imageUrl = 'https://image.tmdb.org/t/p/';

export function Movie({ movie }) {
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorite(favourites.find(favourite => favourite.id === movie.id));
  }, []);

  const handleChange = (func) => {
    func(movie);
    setFavorite(!isFavorite);
  };

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
        { isFavorite ? (
          <div className="block">
            <span className="tag is-success">
              In Favorites
              <button
                type="button"
                className="delete is-small"
                onClick={() => handleChange(removeFromFav)}
              />
            </span>
          </div>
        ) : (
          <button
            type="button"
            className="button is-info is-small"
            onClick={() => handleChange(saveToFavorites)}
          >
            Add to favorites
          </button>
        )}

        <div className="content" hidden>
          {movie.overview}
        </div>
      </div>
    </div>
  );
}

// Movie.propTypes = {
//   title: PropTypes.string,
//   id: PropTypes.number,
//   overview: string,
//   releaseDate: string.isRequired,
//   posterPath: string.isRequired,
// };

// Movie.defaultProps = {
//   title: 'some movie',
//   id: 0,
//   overview: 'description',
// };
