import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './movie.scss';

export const Movie = ({ movie, removeMovie }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div className="movie-heading">
        <div
          role="button"
          tabIndex={0}
          className="movie-title"
          onClick={() => setIsShown(!isShown)}
          onKeyDown={() => setIsShown(!isShown)}
        >
          {movie.title}
        </div>
        <button
          className="delete-btn"
          type="button"
          onClick={() => removeMovie(movie.id)}
        >
          &#128465;
        </button>
      </div>
      <div className={classnames('movie-information',
        { 'movie-information--active': isShown })}
      >
        <p>
          <span className="movie-information__name">Release year: </span>
          {movie.year}
        </p>
        <p>
          <span className="movie-information__name">Movie format: </span>
          {movie.format}
        </p>
        <div>
          <span className="movie-information__name">Cast: </span>
          {movie.actors.map(actor => <p>{actor}</p>)}
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    format: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  removeMovie: PropTypes.func.isRequired,
};
