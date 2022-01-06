/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes, { string } from 'prop-types';
// import { getMovieImage } from '../../api/getMovieImage';

const imageUrl = 'https://image.tmdb.org/t/p/';

export function Movie({
  id,
  title,
  overview,
  releaseDate,
  posterPath,
}) {
  // const [movieId, setId] = useState(0);

  // useEffect(() => {
  //   setId(id);
  // }, []);

  // {getMovieImage(id)}

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={`${imageUrl}/w300/${posterPath}`} alt="Placeholder" />
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
        <button type="button" className="button is-info">Add to favorites</button>

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
