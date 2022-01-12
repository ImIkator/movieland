/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { MovieList } from '../components/MovieList/MovieList';
import { getPopularMovies } from '../api/getPopularMovies';

export function PopularPage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getPopularMovies().then((moviesFromServer) => {
      setMovies(moviesFromServer);
    });
  }, []);

  if(!movies) {
    return (
      <p>Loading</p>
    )
  }

  return (
    <div>
      <MovieList data={movies} />
    </div>
  );
}
