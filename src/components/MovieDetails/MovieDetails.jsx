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

  console.log(recommendations);

  if (!movie || !recommendations) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main>
        <div class="tile is-ancestor">
          <div class="tile is-4">!-- 1/3 --</div>
          <div class="tile">!-- This tile will take the rest: 2/3 --</div>
        </div>
        {/* 
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">Middle tile</p>
            <p class="subtitle">With an image</p>
            <figure className="image is-3by4">
              <img
                src={`${imageUrl}/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </figure>
          </article>
        </div> */}
        {/* <div className="card-image">
          <figure className="image is-3by4">
            <img
              src={`${imageUrl}/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </figure>
        </div> */}

        <FavoritesBar movie={movie} />
        {/* <div className="container">
          <article class="message">
            <div class="message-header">
              <p>{movie.title}</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">{movie.overview}</div>
          </article>
        </div> */}
      </main>
      <section class="hero is-small is-dark">
        <div class="hero-body">
          <p class="title">Recommendations</p>
        </div>
      </section>
      <div className="container">
        <MovieList data={recommendations.results} />
      </div>
    </>
  );
}

{/* <div className="back-image">
  <img
    className="img"
    src={`${imageUrl}/500/${movie.backdrop_path}`}
    alt={movie.title}
  />
</div>; */}
