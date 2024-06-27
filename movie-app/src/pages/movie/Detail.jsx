import React, { useContext, useEffect, useState } from 'react'
import DetailMovie from '../../components/Detail/Detail'
import axios from 'axios';
import Movies from '../../components/Movies/Movies';
import { useParams } from 'react-router-dom';
import ENDPOINTS from '../../utils/constants/endpoints';
import MoviesContext from '../../Context/MoviesContext';

function Detail() {
  const {id} = useParams()
  const {movies, setMovies}= useContext(MoviesContext)
  useEffect(() =>{
    getRecommendations();
  },[id])

  async function getRecommendations() {
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id))
    setMovies(response.data.results);
  }
  return (
    <>
    <DetailMovie />
    {movies.length > 0 && <Movies title="Recommendations" />}
    </>
  )
}

export default Detail;
