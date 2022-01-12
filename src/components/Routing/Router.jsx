import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import { MovieList } from '../MovieList/MovieList';
import { SearchBar } from '../SearchBar/SearchBar';

const Router = () => {
  <Routes>
    {/* <Route path="/movie" component={DetailedMovie} />
    <Route path="/popular" component={Popular} />
    <Route path="/not-found" component={NotFound} /> */}
    <Route exact path="/" component={SearchBar} />
    <Route path="/search" component={SearchBar} />

    {/* <Redirect to="/not-found" /> */}
  </Routes>;
};

export default Router;
