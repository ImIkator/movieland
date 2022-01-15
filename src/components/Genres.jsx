import React, { useEffect, useState } from "react";
import { getGenres } from "../api/getGenres";

export function Genres(genresId) {
  const [genresToshow, setGenres] = useState('');

  useEffect(() => {
    const genres = getGenres(genresId);
    setGenres(genres);
  }, []);

  return (
    <div className="content">
      {genresToshow.map((genre) => {
        return <p>{genre} </p>;
      })}
    </div>
  );
}
