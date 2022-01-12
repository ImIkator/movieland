/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/prefer-default-export

const SearchURL = 'https://api.themoviedb.org/3/search/movie?api_key=61be3a4c68c246ddbff6a44b2d0469f8&language=en-US&query=';
const endPoint = '&include_adult=false';

export const searchMovie = async (input) => {
  fetch(`${SearchURL}${input}${endPoint}`)
    .then((response) => response.json())
    .then((movie) => {
      console.log(movie);
      return movie;
    });
};
