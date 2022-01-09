/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './MovieList.css';
import { Movie } from '../Movie/Movie';

export function MovieList({ func }) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    func().then((moviesFromServer) => {
      setMovie(moviesFromServer);
    });
  }, []);

  console.log(movies);
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
  func: PropTypes.func.isRequired,
};
