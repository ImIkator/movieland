/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/prefer-default-export */
import { useEffect, useState, useRef } from 'react';
import { MovieList } from '../components/MovieList/MovieList';
import { getPopularMovies } from '../api/getPopularMovies';
import { loadNext } from '../api/loadNext';

export function PopularPage() {
  const [movies, setMovies] = useState(null);
  const currentPage = useRef(1);

  useEffect(() => {
    getPopularMovies().then((moviesFromServer) => {
      setMovies(moviesFromServer);
    });
  }, []);

  const handleLoadNext = async () => {
    currentPage.current++;

    const movies = await loadNext(currentPage.current);

    setMovies(movies.results);
  };

  if (!movies) {
    return <p>Loading</p>;
  }

  return (
    <div className="container">
      <MovieList data={movies} />
      <button
        class="button is-medium is-dark"
        onClick={handleLoadNext}
      >
        Load Next
      </button>
    </div>
  );
}