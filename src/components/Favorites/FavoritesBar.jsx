import { React, useEffect, useState } from 'react';
import { getFavorites } from './getFavorites';
import { removeFromFav } from './removeFromFav';
import { saveToFavorites } from './saveToFavorites';

export function FavoritesBar({ movie }) {
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    const addedToFavorites = getFavorites();

    const target = addedToFavorites.find(
      (favorite) => favorite.id === movie.id
    );

    if (target) {
      setFavorite(true);
    }
  }, [movie.id]);

  const handleChange = (func) => {
    func(movie);
    setFavorite(!isFavorite);
  };
  console.log(isFavorite);
  console.log('favorites');  
  return (
    <>
      {isFavorite ? (
        <div className="block">
          <span className="tag is-danger">
            Remove from Favorites
            <button
              type="button"
              className="delete is-small"
              onClick={() => handleChange(removeFromFav)}
            />
          </span>
        </div>
      ) : (
        <button
          type="button"
          className="button is-success is-small is-full"
          onClick={() => handleChange(saveToFavorites)}
        >
          Add to favorites
        </button>
      )}
    </>
  );
}
