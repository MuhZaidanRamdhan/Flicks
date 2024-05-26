import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h2 className={styles.footer__title}>Flicks</h2>
        <p className={styles.footer__author}>Created by MuhZaidanRamdhan.</p>
      </footer>
    </div>
  );
}

export default Footer;
