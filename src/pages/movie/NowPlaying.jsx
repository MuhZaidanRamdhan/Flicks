import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import MoviesContext from "../../Context/MoviesContext";

function NowPlaying() {
  const {setMovies} = useContext(MoviesContext);

  async function getNowPlaying() {
    const response = await axios(ENDPOINTS.NOW_PLAYING)
    setMovies(response.data.results)
  }

  useEffect(() => {
    getNowPlaying();
  }, []);
  return (
    <>
      <Hero />
      <Movies title="Now Playing"/>
    </>
  );
}

export default NowPlaying;
