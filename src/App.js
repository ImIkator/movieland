/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
// import { useState } from 'react';
import { Link } from 'react-router-dom';

import './App.scss';
// import { searchMovie } from './api/searchMovie';
import { SearchBar } from './components/SearchBar/SearchBar';
import { getPopularMovies } from './api/getPopularMovies';
import { MovieList } from './components/MovieList/MovieList';
import { Pagination } from './components/Pagination/Pagination';

function App() {
  // const [page, setPage] = useState('home');
  // localStorage.clear();
  return (
    <div className="App">
      <div className="header">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <h1 className="title is-2">Movieland</h1>
          <Link className="navbar-item" to="/home">Home</Link>
          <Link className="navbar-item" to="favorites">Favorites</Link>
          <div className="navbar-end">
            <SearchBar />
          </div>
        </nav>
      </div>
      {/* <Routes>
      <Route path="/home">
        {/* <h2 className="subtitle is-3">
          Popular movies
        </h2> */}
      {/* <MovieList func={getPopularMovies} /> */}
      {/* <Pagination /> */}
      {/* </Route><Route path="/favorites"> */}
      <h2 className="subtitle is-3">
        Favorites
      </h2>
      <MovieList func={getPopularMovies} />
      <Pagination />
      {/* </Route> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
