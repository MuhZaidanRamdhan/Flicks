import { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constants/data";
import MoviesContext from "../Context/MoviesContext";
import axios from "axios";
import ENDPOINTS from "../utils/constants/endpoints";

function Home() {
  const { setMovies } = useContext(MoviesContext);

  async function getUpComingMovies() {
    const response = await axios(ENDPOINTS.UP_COMING);
    setMovies(response.data.results);
  }

  useEffect(() => {
    getUpComingMovies();
  }, []);
  return (
    <div>
      <Hero />
      <Movies />
    </div>
  );
}

export default Home;
