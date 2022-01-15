// import React, { useEffect, useState } from "react";
// import { getGenres } from "../api/getGenres";

export function Genres(genres) {
  // const [genresToshow, setGenres] = useState('');

  // useEffect(() => {
  //   const genres = getGenres(genresId);
  //   setGenres(genres);
  // }, []);
console.log(genres);
  return (
    <div className="content">
      {genres.genres.map((genre) => {
        return <i>{genre} </i>;
      })}
    </div>
  );
}
