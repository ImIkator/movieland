import { useState, useEffect } from 'react';
import { getGenres } from '../api/getGenres';

export function useMovieGenres(movie) {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      const genresFromServer = await getGenres();
      const proccesedGenres = genresFromServer.genres.reduce(
        (allGenres, { id, name }) => {
          allGenres[id] = name;

          return allGenres;
        },
        {}
      );

      setGenres(proccesedGenres);
    };

    fetchGenres();
  }, []);

  return genres;
}