import { useEffect, useState } from "react";
import {
  Container,
  StyledHero,
  HeroLeft,
  HeroTitle,
  HeroGenre,
  HeroDescription,
  HeroRight,
  HeroImage,
} from "./Hero.styled";
import Button from "../ui/Button";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

function Hero() {
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
  const title = movie.title;
  useEffect(() => {
    getDetailMovie();
  }, []);

  async function getTrendingMovie() {
    const response = await axios(ENDPOINTS.TRENDING);
    return response.data.results[2];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;

    const response = await axios(ENDPOINTS.DETAIL_MOVIE(id));

    setMovie(response.data);
  }
  return (
    <Container>
      <StyledHero>
        <HeroLeft>
          <HeroTitle>{title}</HeroTitle>
          <HeroGenre>{genres}</HeroGenre>
          <HeroDescription>{movie.overview}</HeroDescription>
          <Button
            variant="primary"
            size="sm"
            as="a"
            href={trailer}
            target="_blank"
          >
            ▶ Watch Now!
          </Button>
        </HeroLeft>
        <HeroRight>
          <HeroImage
            src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={title}
          />
        </HeroRight>
      </StyledHero>
    </Container>
  );
}

export default Hero;
