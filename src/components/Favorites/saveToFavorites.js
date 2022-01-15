/* eslint-disable import/prefer-default-export */

export function saveToFavorites(favorites) {
  try {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  localStorage.setItem(
    "favorites",
    JSON.stringify([...savedFavorites, favorites])
  );

  console.log(favorites);
  console.log(localStorage.getItem("favorites"));
  } catch {
    return;
  }
}
