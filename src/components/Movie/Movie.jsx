import { FavoritesBar } from "../Favorites/FavoritesBar";
import { Link } from "react-router-dom";
import { Genres } from "./Genres";
import { useMovieGenres } from "../../hooks/useGenres";

import "./Movie.scss";

const imageUrl = "https://image.tmdb.org/t/p/";

export function Movie({ movie }) {
  const movieGenresMap = useMovieGenres();

  if (!movieGenresMap) {
    return <p>Loading...</p>;
  }

  let genres;

  if (movie.hasOwnProperty('genres')) {
    genres = movie.genres.map((genre) => genre.name)
  } else {
    genres = movie.genre_ids.map(
      (genreId) => movieGenresMap[genreId] || "No"
    );
  }

  const releaseDate = movie.release_date ? movie.release_date.slice(0, 4) : '-';

  return (
    <div className="card">
      <div className="card-image">
        <Link to={`/${movie.id}`}>
          <figure className="image is-3by4">
            <img
              src={`${imageUrl}/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </figure>
        </Link>
      </div>
      <div className="card-content">
        <div className="media-content is-start">
          <p className="title is-5">{movie.title}</p>
          <i className="subtitle is-6">
            Release date: {releaseDate}
          </i>
          <Genres genres={genres} />
          <p className="vote">{movie.vote_average}</p>
        </div>
        <FavoritesBar movie={movie} />
      </div>
    </div>
  );
};
