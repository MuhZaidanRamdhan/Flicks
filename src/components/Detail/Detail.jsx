import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../ui/Button";
import StyledDetail from "./Detail.styled";
import ENDPOINTS from "../../utils/constants/endpoints";

function DetailMovie() {
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
  const title = movie.title;
  const rating = movie.vote_average ? `${movie.vote_average.toFixed(1)}🌟` : "";
  const overview = movie.overview;
  const { id } = useParams();
  useEffect(() => {
    getDetailMovie();
  }, [id]);

  async function getDetailMovie() {
    const response = await axios(ENDPOINTS.DETAIL_MOVIE(id));
    setMovie(response.data);
  }
  console.log(movie);
  return (
    <StyledDetail>
      <div className="poster">
        <img
          src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={title}
        />
      </div>
      <div className="info">
        <h1>{title}</h1>
        <h2>Genre: {genres}</h2>
        <h3>Rating: {rating}</h3>
        <p>{overview}</p>
        <Button as="a" href={trailer} size="md" target="_blank">
        ▶ Watch Now!
        </Button>
      </div>
    </StyledDetail>
  );
}

export default DetailMovie;
