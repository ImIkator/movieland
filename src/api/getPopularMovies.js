/* eslint-disable import/prefer-default-export */
export const getPopularMovies = async () => fetch('https://api.themoviedb.org/3/movie/popular?api_key=61be3a4c68c246ddbff6a44b2d0469f8')
  .then((response) => response.json())
  .then((movie) => movie.results);
