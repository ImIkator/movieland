/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';

import './App.scss';
import { SearchBar } from './components/SearchBar/SearchBar';
import { getPopularMovies } from './api/getPopularMovies';
import { MovieList } from './components/MovieList/MovieList';
import { Pagination } from './components/Pagination/Pagination';
import { Navbar } from './components/Navbar/Navbar';
import { getRecommendation } from './api/getRecommendations';
// import { getMovieInfo } from './api/getMovieInfo';
import { getGenre } from './api/getGenres';
import { Route, Routes, Redirect } from 'react-router-dom';
import { PopularPage } from './pages/PopularPage';
import { SearchPage } from './pages/SearchPage';
import { getFavorites } from './components/Favorites/getFavorites';
import { FavoritesPage } from './pages/FavoritesPage';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { getMovieDetails } from './api/getMovieDetails';

function App() {
  // const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  // setFavorites(getFavorites());
  // }, []);

  // console.log(getFavorites());
  return (
    <div className="App">
      {/* <div className='columns is-flex-direction-columns is full-height-100vh'></div> */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/'>
            <Route index element={<PopularPage />} />
            <Route path='/popular' element={<PopularPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path="/:movieId" element={<MovieDetails />} />
          </Route>
        </Routes>
        {/* <MovieDetails /> */}
      </div>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by{" "}
            <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );

}

export default App;
