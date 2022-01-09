import React from 'react';
import PropTypes from 'prop-types';
import { Movie } from '../Movie/Movie';

export const MovieList = ({ movies, removeMovie }) => (
  <div>
    {movies.map(movie => (
      <Movie
        key={movie.id}
        movie={movie}
        removeMovie={removeMovie}
      />
    ))
    }
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    format: PropTypes.string.isRequired,
  })).isRequired,
  removeMovie: PropTypes.func.isRequired,
};
