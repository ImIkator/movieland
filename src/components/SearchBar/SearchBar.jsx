/* eslint-disable import/prefer-default-export */
import React, { useState } from "react";
import { searchMovie } from "../../api/searchMovie";
import { MovieList } from "../MovieList/MovieList";

import "./SearchBar.css";

export function SearchBar() {
  const [searchQuery, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const click = async () => {
    const movies = await searchMovie(searchQuery);
    console.log(movies);
    setMovies(movies.results);
  };

  return (
    <div className="container">
      <div className="container">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Search movie"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="button is-dark" onClick={click}>
          Search
        </button>
      </div>
      {movies && <MovieList data={movies} />}
    </div>
  );
}
