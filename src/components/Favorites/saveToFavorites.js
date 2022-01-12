/* eslint-disable import/prefer-default-export */

export function saveToFavorites(favoriteId) {
  localStorage.setItem(favoriteId, favoriteId);
  console.log('saved');
}
