import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './newMovieForm.scss';

export const NewMovieForm = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    id: '',
    title: '',
    year: 2022,
    format: '',
    actors: [''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'year') {
      setNewMovie({
        ...newMovie,
        year: +value,
      });
    }

    setNewMovie({
      ...newMovie,
      id: newMovie.title + newMovie.year,
      [name]: value,
    });

    // eslint-disable-next-line no-console
    console.log(newMovie);
  };

  const clearForm = () => {
    setNewMovie(
      {
        id: 2022,
        title: '',
        year: '',
        format: '',
      },
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addMovie(newMovie);
    clearForm();
  };

  return (
    <>
      <div className="form-title">Add a new movie</div>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-title">
          <label className="label">
            <input
              className="input"
              required
              type="text"
              id="title"
              placeholder="Enter movie title"
              value={newMovie.title}
              name="title"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="input-year">
          <input
            className="input"
            required
            type="text"
            id="year"
            placeholder="Enter movie release year"
            value={newMovie.year}
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="input-format">
          <select
            className="input"
            name="format"
            id="format"
            value={newMovie.format}
            onChange={handleChange}
          >
            <option value="DVD">DVD</option>
            <option value="Blu-Ray">Blu-Ray</option>
            <option value="VHC">VHC</option>
          </select>
        </div>
        <button
          className="form-button"
          type="submit"
        >
          Add movie
        </button>
      </form>
    </>
  );
};

NewMovieForm.propTypes = {
  addMovie: PropTypes.func.isRequired,
};
