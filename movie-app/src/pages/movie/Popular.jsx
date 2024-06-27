import axios from "axios";
import React, { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useContext } from "react";
import MoviesContext from "../../Context/MoviesContext";

function Popular() {
  const { setMovies } = useContext(MoviesContext);

  async function popularMovie() {
    const response = await axios(ENDPOINTS.POPULAR);
    setMovies(response.data.results);
  }

  useEffect(() => {
    popularMovie();
  }, []);
  return (
    <>
      <Hero />
      <Movies title="Popular" />
    </>
  );
}

export default Popular;
