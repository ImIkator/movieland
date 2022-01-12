/* eslint-disable import/prefer-default-export */

export async function removeFromFav(favorite) {
  const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const newFavorites = savedFavorites.filter(
    savedFavorite => savedFavorite.id !== favorite.id
  );

  localStorage.setItem("favorites", JSON.stringify(newFavorites));
}