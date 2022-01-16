/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { Movie } from "../Movie/Movie";

export function MovieList({ data }) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    setMovie(data);
  }, [data]);

  console.log(movies);

  if (!movies.length) {
    return null;
  }

  return (
    <div className="movieList-cintainer">
      <div className="movieList">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
