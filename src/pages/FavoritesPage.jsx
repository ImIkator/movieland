/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { MovieList } from '../components/MovieList/MovieList';
import { getFavorites } from '../components/Favorites/getFavorites';

export function FavoritesPage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    setMovies(getFavorites());
  }, []);

  if(!movies) {
    return (
      <p>Loading</p>
    )
  }

  console.log(movies);
  console.log(getFavorites());

  return (
    <div>
      <MovieList data={movies} />
    </div>
  );
}