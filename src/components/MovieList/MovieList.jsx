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

  // console.log(movies);
  return (
    <div className="movieList">
      {movies.map((movie) => (
        <Movie
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          key={movie.id}
          releaseDate={movie.release_date}
          posterPath={movie.poster_path}
        />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  data: PropTypes.array.isRequired,
};
