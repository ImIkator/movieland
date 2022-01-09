/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';

import './App.scss';
// import { Movie } from './components/Movie/Movie';
// import { getPopularMovies } from './api/getPopularMovies';
// import { searchMovie } from './api/searchMovie';
// import { SearchBar } from './components/SearchBar/SearchBar';
import { getPopularMovies } from './api/getPopularMovies';
import { MovieList } from './components/MovieList/MovieList';
import { Pagination } from './components/Pagination/Pagination';

function App() {
  const [page, setPage] = useState('home');
  // localStorage.clear();
  return (
    <div className="App">
      <div className="header">
        {/* <h1 className="title is-2">Movieland</h1>
        <SearchBar /> */}
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://imikator.github.io/movieland/">
              <img src="./logo_TMDB.svg" alt="The movie data base" width="112" height="28" />
            </a>
            <a className="navbar-item" onClick={setPage('home')}>Home</a>
            <a className="navbar-item" onClick={setPage('favorites')}>Favorites</a>

          </div>
        </nav>
      </div>
      <h2 className="subtitle is-3">
        Popular movies
        {page}
      </h2>
      <MovieList func={getPopularMovies} />
      <Pagination />
    </div>
  );
}

export default App;
