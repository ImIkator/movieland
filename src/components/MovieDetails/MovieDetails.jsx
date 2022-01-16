import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FavoritesBar } from "../Favorites/FavoritesBar";
import { getRecommendation } from "../../api/getRecommendations";
import { MovieList } from "../MovieList/MovieList";
import { getMovieInfo } from "../../api/getMovieInfo";
import "./MovieDetails.scss";

const imageUrl = "https://image.tmdb.org/t/p/";

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

  if (!movie || !recommendations) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details">
      <div className="back-image">
        <img
          className="img"
          src={`${imageUrl}/w500/${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
      <div className="container tile-container">
        <div class="tile is-ancestor">
          <div class="tile is-4 is-vertical">
            <div class="tile is-child box">
              <figure class="image is-3by3">
                <img
                  src={`${imageUrl}w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </figure>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <p class="title">{movie.title}</p>
              <p className="title is-6">{movie.production_countries.map((country) => <i>{country.name} </i>)}</p>
              <i className="title is-5">{movie.tagline}</i>
              <p className="title is-5">Description</p>
              <p>{movie.overview}</p>
              <p className="subtitle is-5">Original title: "{movie.original_title}"</p>
              <p><b>Release date:</b> {movie.release_date}</p>
              <p><b>Genres:</b> {movie.genres.map((genre) => <em>{genre.name} </em>)}</p>
              <p><b>Budget:</b> {movie.budget} $</p>
              <p><b>Duration:</b> {movie.runtime} min</p>
              <p><b>Votes:</b> <em>{movie.vote_average}/10</em></p>
              <FavoritesBar movie={movie} />
            </div>
          </div>
        </div>
      </div>
      <section className="hero is-small is-dark">
        <div className="hero-body">
          <p className="title reccomend">Recommendations</p>
        </div>
      </section>
      <div className="container">
        <MovieList data={recommendations.results} />
      </div>
    </div>
  );
};
