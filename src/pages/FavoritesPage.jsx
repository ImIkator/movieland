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

  return (
    <div>
      <MovieList data={movies} />
    </div>
  );
};
