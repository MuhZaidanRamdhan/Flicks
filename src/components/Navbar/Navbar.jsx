import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Flicks</h1>
        </div>
        <ul className={styles.navbar__list}>
          <li><Link className={styles.navbar__item} to="/">Home</Link></li>
          <li><Link className={styles.navbar__item} to="/movie/create">Add Movie</Link></li>
          <li><Link className={styles.navbar__item} to="/movie/popular">Popular</Link></li>
          <li><Link className={styles.navbar__item} to="/movie/now">Now Playing</Link></li>
          <li><Link className={styles.navbar__item} to="/movie/top">Top Rated</Link></li>
        </ul>

        <ul className={styles.navbar__auth}>
          <li className={styles.navbar__item}>Sign in</li>
          <li className={styles.navbar__item}>Sign up</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
