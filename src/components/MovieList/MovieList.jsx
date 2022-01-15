/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './MovieList.css';
import { Movie } from '../Movie/Movie';

export function MovieList({ data }) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    setMovie(data);
  }, [data]);

  console.log(movies);

  return (
    <div className="movieList">
      {movies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.id}
        />
      ))}
      <button class="button is-medium is-success is-light">Load more</button>
    </div>
  );
}

MovieList.propTypes = {
  data: PropTypes.array.isRequired,
};
