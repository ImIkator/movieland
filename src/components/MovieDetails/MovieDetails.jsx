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
    <>
      <main>
        <div className="tile is-ancestor">
          <div className="tile is-4">!-- 1/3 --</div>
          <div className="tile">!-- This tile will take the rest: 2/3 --</div>
        </div>
        <FavoritesBar movie={movie} />
      </main>
      <section className="hero is-small is-dark">
        <div className="hero-body">
          <p className="title">Recommendations</p>
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
