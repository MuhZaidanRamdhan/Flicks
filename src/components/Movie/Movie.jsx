import React from "react";
import styles from "../Movie/Movie.module.css";

function Movie(props) {
  const { image, title, date, rated } = props;
  return (
    <div className={styles.movie}>
      <img className={styles.movie__image} src={image} alt="placeholder" />
      <h3 className={styles.movie__title}>{title}</h3>
      <p className={styles.movie__date}>{date}</p>
    </div>
  );
}

export default Movie;
