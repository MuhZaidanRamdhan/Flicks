import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<Create />}></Route>
          <Route path="/movie/popular" element={<Popular />}></Route>
          <Route path="/movie/now" element={<NowPlaying />}></Route>
          <Route path="/movie/top" element={<TopRated />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
