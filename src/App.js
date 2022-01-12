/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import './App.scss';
import { SearchBar } from './components/SearchBar/SearchBar';
import { getPopularMovies } from './api/getPopularMovies';
import { MovieList } from './components/MovieList/MovieList';
import { Pagination } from './components/Pagination/Pagination';
import { Navbar } from './components/Navbar/Navbar';
import Router from './components/Routing/Router';
import { getRecommendation } from './api/getRecommendations';
import { getMovieInfo } from './api/getMovieInfo';
import { getGenre } from './api/getGenres';

class App extends React.PureComponent {
  state = {
    page: 'popular',
    movies: [],
    // searchTerm: '',
  };

  componentDidMount() {
    getPopularMovies().then((moviesFromServer) => {
      this.setState({ movies: moviesFromServer });
    });
  }

  // setSearch(e) {
  //   this.setState({ searchTerm: e });
  // }

  render() {
    // getRecommendation(512195);
    // getMovieInfo(512195);
    getGenre();
    const { movies } = this.state;
    console.log(movies);
    return (
      <div className="App">
        <Navbar />
        <SearchBar />
        <MovieList data={movies} />
        {/* <Pagination /> */}
        <div className="container">
          {/* <Router /> */}
        </div>
      </div>
    );
  }
}

export default App;
