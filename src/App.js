/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import './App.scss';
// import { Movie } from './components/Movie/Movie';
// import { getPopularMovies } from './api/getPopularMovies';
// import { searchMovie } from './api/searchMovie';
import { SearchBar } from './components/SearchBar/SearchBar';
import { getPopularMovies } from './api/getPopularMovies';
import { MovieList } from './components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      {/* <Movie /> */}
      <SearchBar />
      <h2 className="subtitle is-3">Popular movies</h2>
      <MovieList func={getPopularMovies} />
    </div>
  );
}

export default App;
