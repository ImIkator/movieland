/* eslint-disable import/prefer-default-export */
export const getGenre = async () => {
  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=61be3a4c68c246ddbff6a44b2d0469f8&language=en-US')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.genres);
      return data;
    });
};
