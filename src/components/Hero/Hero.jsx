import styles from "./Hero.module.css";
function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Titanic</h2>
          <h3 className={styles.hero__genre}>Genre: Drama, Romance</h3>
          <p className={styles.hero__description}>
            The movie is about the 1912 sinking of the RMS Titanic. It stars
            Kate Winslet and Leonardo DiCaprio. The two play characters who are
            of different social classes. They fall in love after meeting aboard
            the ship, but it was not good for a rich girl to fall in love with a
            poor boy in 1912.
          </p>
          <button className={styles.hero__button}>▶ Watch Now!</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src="https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
