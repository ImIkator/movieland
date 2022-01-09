/* eslint-disable import/prefer-default-export */

export async function removeFromFav(id) {
  localStorage.removeItem(id);
  console.log('removed');
}
