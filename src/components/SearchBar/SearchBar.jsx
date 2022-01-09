/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { searchMovie } from '../../api/searchMovie';
// import { MovieList } from '../MovieList/MovieList';

import './SearchBar.css';

export function SearchBar() {
  const [searchQuery, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchBar">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Search movie"
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="button is-dark"
        onClick={() => searchMovie(searchQuery)}
      >
        Search
      </button>
    </div>
  );
}
