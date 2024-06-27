import axios from "axios";
import React, { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useContext } from "react";
import MoviesContext from "../../Context/MoviesContext";

function TopRated() {
  const { setMovies } = useContext(MoviesContext);

  async function getTopRated() {
    const response = await axios(ENDPOINTS.TOP_RATED);
    setMovies(response.data.results);
  }

  useEffect(() => {
    getTopRated();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Top Rated" />
    </>
  );
}

export default TopRated;
