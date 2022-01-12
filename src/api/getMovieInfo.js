/* eslint-disable import/prefer-default-export */
export const getMovieInfo = async (id) => {
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=61be3a4c68c246ddbff6a44b2d0469f8&language=en-US`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};
