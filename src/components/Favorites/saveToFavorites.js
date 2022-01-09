/* eslint-disable import/prefer-default-export */

export async function saveToFavorites(favoriteId) {
  localStorage.setItem(favoriteId, favoriteId);
  console.log('saved');
}
