import { useContext, useState } from "react";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";
import Button from "../ui/Button";
import MoviesContext from "../../Context/MoviesContext";

function Movies({title = "Latest"}) {

  const {movies, setMovies} = useContext(MoviesContext);

  function handleClick() {
    const newMovies = {
      id: nanoid(),
      title: "Encanto",
      year: "2021",
      type: "movie",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg",
    };
    setMovies([...movies, newMovies]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <div className={styles.title__button}>
          <h3 className={styles.movies__title}>
            {title} <span>Movies</span>
          </h3>
          {/* {title === "Latest" ? 
          <Button onClick={handleClick} size="sm">Add Movie</Button>: ""} */}
        </div>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return (
              <Movie
                movie={movie}
                key={movie.id}
                image={movie.poster}
                title={movie.title}
                date={movie.year}
                rated={movie.vote_average}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Movies;
