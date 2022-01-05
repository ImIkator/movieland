/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import './App.css';
// import { Movie } from './components/Movie/Movie';
// import { Card } from './components/component';
// import { getPopularMovies } from './api/getPopularMovies';
import { MovieList } from './components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      {/* <Card /> */}
      {/* <Movie /> */}
      <MovieList />
    </div>
  );
}

export default App;
