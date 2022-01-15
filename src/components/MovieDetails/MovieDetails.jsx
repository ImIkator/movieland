import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FavoritesBar } from "../Favorites/FavoritesBar";
import { getRecommendation } from "../../api/getRecommendations";
import { MovieList } from "../MovieList/MovieList";
import { getMovieInfo } from "../../api/getMovieInfo";

const imageUrl = 'https://image.tmdb.org/t/p/';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieFromServer = await getMovieInfo(movieId);
      const recommendationsFromServer = await getRecommendation(movieId);

      setMovie(movieFromServer);
      setRecommendations(recommendationsFromServer);
    };

    fetchMovie();
  }, [movieId]);

  console.log(recommendations);

  if (!movie || !recommendations) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <figure className="image is-3by4">
        <img src={`${imageUrl}/w500/${movie.poster_path}`} alt={movie.title} />
      </figure>
      <FavoritesBar movie={movie} />
      <div className="container">
        <article class="message">
          <div class="message-header">
            <p>{movie.title}</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">{movie.overview}</div>
        </article>

        <div className="container">
          <MovieList data={recommendations.results} />
        </div>
      </div>
    </>
  );
}
