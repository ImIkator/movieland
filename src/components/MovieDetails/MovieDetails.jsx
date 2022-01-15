import { React } from "react";
import { FavoritesBar } from "../Favorites/FavoritesBar";
import { getRecommendation } from "../../api/getRecommendations";
import { MovieList } from "../MovieList/MovieList";

export function MovieDetails(movie) {
  return (
    <>
      <FavoritesBar movie={movie} />
      <div className="container">
        <article class="message">
          <div class="message-header">
            <p>{movie.title}</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            {movie.overview}
          </div>
        </article>
        
        <div className="container">
          <MovieList data={getRecommendation(movie.id)} />
        </div>
      </div>
    </>
  );
}
