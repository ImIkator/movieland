/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';

import './App.scss';
// import { Movie } from './components/Movie/Movie';
// import { getPopularMovies } from './api/getPopularMovies';
// import { searchMovie } from './api/searchMovie';
import { SearchBar } from './components/SearchBar/SearchBar';
import { getPopularMovies } from './api/getPopularMovies';
import { MovieList } from './components/MovieList/MovieList';
import { Pagination } from './components/Pagination/Pagination';

function App() {
  const [page, setPage] = useState('home');
  // localStorage.clear();
  return (
    <div className="App">
      <div className="header">
        <h1 className="title is-2">Movieland</h1>
        <SearchBar />
      </div>
      {page === 'home' && (
        <>
          <h2 className="subtitle is-3">Popular movies</h2>
          <MovieList func={getPopularMovies} />
          <Pagination />
        </>
      )}
    </div>
  );
}

export default App;
