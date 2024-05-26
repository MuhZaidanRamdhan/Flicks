import { useState } from "react";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

function Movies(props) {
  const { movies, setMovies } = props;

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
            Latest <span>Movies</span>
          </h3>
          <button onClick={handleClick} className={styles.addMovie}>
            Add Movie
          </button>
        </div>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                image={movie.poster}
                title={movie.title}
                date={movie.year}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Movies;
