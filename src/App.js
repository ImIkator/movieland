/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import './App.css';
// import { Movie } from './components/Movie/Movie';
// import { getPopularMovies } from './api/getPopularMovies';
// import { searchMovie } from './api/searchMovie';
import { SearchBar } from './components/SearchBar/SearchBar';
import { MovieList } from './components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      {/* <Movie /> */}
      <MovieList />
      <SearchBar />
    </div>
  );
}

export default App;
