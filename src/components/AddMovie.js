import React, { useState } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  const [movieInput, setMovieInput] = useState({
    title: '',
    openingText: '',
    releaseDate: '',
  });

  const inputChangeHandler = (e) => {
    const value = e.target.value;

    setMovieInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: value,
      };
    });
  };

  // const titleChangeHandler = (e) => {
  //   setMovieInput((prevState) => {
  //     return {
  //       ...prevState,
  //       title: e.target.value,
  //     };
  //   });
  // };

  // const openingTextChangeHandler = (e) => {
  //   setMovieInput((prevState) => {
  //     return {
  //       ...prevState,
  //       openingText: e.target.value,
  //     };
  //   });
  // };

  // const releaseDateChangeHandler = (e) => {
  //   setMovieInput((prevState) => {
  //     return {
  //       ...prevState,
  //       releaseDate: e.target.value,
  //     };
  //   });
  // };

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: movieInput.title,
      openingText: movieInput.openingText,
      releaseDate: movieInput.releaseDate,
    };

    setMovieInput(() => {
      return {
        title: '',
        openingText: '',
        releaseDate: '',
      };
    });
    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={movieInput.title}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows="5"
          id="opening-text"
          name="openingText"
          value={movieInput.openingText}
          onChange={inputChangeHandler}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input
          type="text"
          id="date"
          name="releaseDate"
          value={movieInput.releaseDate}
          onChange={inputChangeHandler}
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
