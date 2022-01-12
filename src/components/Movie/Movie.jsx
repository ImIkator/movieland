/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import { React, useEffect, useState } from 'react';
import PropTypes, { string } from 'prop-types';
import { saveToFavorites } from '../Favorites/saveToFavorites';
import { removeFromFav } from '../Favorites/removeFromFav';

const imageUrl = 'https://image.tmdb.org/t/p/';

export function Movie({
  id,
  title,
  overview,
  releaseDate,
  posterPath,
}) {
  const [isFavorite, setFavorite] = useState(0);

  useEffect(() => {
    setFavorite(localStorage.getItem(id));
  }, []);

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by4">
          <img src={`${imageUrl}/w300/${posterPath}`} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5">{title}</p>
            <p className="subtitle is-6">{releaseDate}</p>
            <p className="subtitle is-6" hidden>{id}</p>
          </div>
        </div>
        { isFavorite !== null ? (
          <div className="block">
            <span className="tag is-success">
              In Favorites
              <button
                type="button"
                className="delete is-small"
                onClick={() => removeFromFav(id)}
              />
            </span>
          </div>
        ) : (
          <button
            type="button"
            className="button is-info is-small"
            onClick={() => saveToFavorites(id)}
          >
            Add to favorites
          </button>
        )}

        <div className="content" hidden>
          {overview}
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  overview: string,
  releaseDate: string.isRequired,
  posterPath: string.isRequired,
};

Movie.defaultProps = {
  title: 'some movie',
  id: 0,
  overview: 'description',
};
