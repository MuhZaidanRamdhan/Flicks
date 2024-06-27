import React from "react";
import { StyledMovie, StyledLink } from "./Movie.styled";

function Movie(props) {
  const { image, title, date, rated, movie } = props;

  const tmdbImage = `http://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  const year = movie.year || movie.release_date;
  const rating = rated ? `${rated.toFixed(1)}⭐` : "";

  return (
    <StyledMovie>
      <StyledLink to={`/movie/${movie.id}`}>
        <div className="container-image">
          <img src={image || tmdbImage} alt={title} />
          {rating.length > 0 && (
            <div className="rating">
              <p>{rating}</p>
            </div>
          )}
          <div className="overlay">
            <div className="play">▶</div>
          </div>
        </div>
        <h3>{movie.title}</h3>
      </StyledLink>
      <p>{year}</p>
    </StyledMovie>
  );
}

export default Movie;
