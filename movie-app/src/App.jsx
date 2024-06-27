import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import Detail from "./pages/movie/Detail";
import MoviesContext from "./Context/MoviesContext";
import data from "./utils/constants/data";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(data);

  const contextValue = {
    movies,
    setMovies,
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <MoviesContext.Provider value={contextValue}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/movie/create" element={<Create />}></Route>
              <Route path="/movie/popular" element={<Popular />}></Route>
              <Route path="/movie/now" element={<NowPlaying />}></Route>
              <Route path="/movie/top" element={<TopRated />}></Route>
              <Route path="/movie/:id" element={<Detail />}></Route>
            </Routes>
          </Layout>
        </MoviesContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
