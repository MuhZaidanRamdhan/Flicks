import { useContext, useState } from "react";
import styles from "./Form.module.css";
import { nanoid } from "nanoid";
import Button from "../ui/Button";
import MoviesContext from "../../Context/MoviesContext";

function Form() {
 

  const {movies, setMovies} = useContext(MoviesContext)

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);

  const { title, date, poster, type } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (title == "") {
      setIsTitleError(true);
      return false;
    } else if (date == "") {
      setIsDateError(true);
      setIsTitleError(false);
      return false;
    } else if (poster == "") {
      setIsPosterError(true);
      setIsDateError(false);
      return false;
    } else if (type == "") {
      setIsTypeError(true);
      setIsPosterError(false);
      return false;
    } else {
      setIsTitleError(false);
      setIsDateError(false);
      setIsPosterError(false);
      setIsTypeError(false);
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      poster: poster,
      type: type,
    };

    setMovies([...movies, movie]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && addMovie();
  }

  return (
    <div className={styles.container}>
      <section className={styles.forms}>
        <div className={styles.forms__left}>
          <img
            src="https://i.pinimg.com/564x/e2/00/93/e20093e20edd706f7718a18fdc62ef2a.jpg"
            alt="placeholder"
            className={styles.form__image}
          />
        </div>
        <div className={styles.forms__right}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2>
              Add <span>Movies</span>
            </h2>
            <div className={styles.form__title}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleChange}
                className={styles.form__input}
              />
              {isTitleError ? <p className={styles.error_message}>Title wajib diisi</p> : ""}

              <label htmlFor="year" className={styles.form__label}>
                Year
              </label>
              <input
                onChange={handleChange}
                name="date"
                type="text"
                id="year"
                value={date}
                className={styles.form__input}
              />
              {isDateError ? <p className={styles.error_message}>Date wajib diisi</p> : ""}
              <label htmlFor="poster" className={styles.form__label}>
                Poster
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="poster"
                name="poster"
                value={poster}
                className={styles.form__input}
              />
              {isPosterError ? <p className={styles.error_message}>Poster wajib diisi</p> : ""}
              <label htmlFor="type" className={styles.form__label}>
                Type
              </label>
              <select
                onChange={handleChange}
                type="text"
                id="type"
                name="type"
                value={type}
                className={styles.form__input__select}
              >
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
              </select>
              {isTypeError ? <p className={styles.error_message}>Type wajib diisi</p> : ""}
              <Button size="md">Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
