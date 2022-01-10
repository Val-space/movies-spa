import React, { useState, useEffect } from 'react';
import './App.scss';
import { MovieList } from './components/MovieList/MovieList';
import { FileUpload } from './components/FileUpload/FileUpload';
import { NewMovieForm } from './components/NewMovieForm/NewMovieForm';
import { GetMoviesFromServer } from './api/api';

export const App = () => {
  const [movies, setMovies] = useState([
    {
      id: '1',
      title: 'Blazing Saddles',
      year: 1974,
      format: 'VHS',
      actors: [
        'Harvey Korman',
        'Gene Wilder',
        'Slim Pickens',
        'Madeline Kahn',
      ],
    },
    {
      id: '2',
      title: 'Matrix',
      year: 2000,
      format: 'VHS',
      actors: [
        'Mel Brooks',
      ],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        const moviesFromServer = await GetMoviesFromServer();

        // eslint-disable-next-line no-console
        console.log(moviesFromServer);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }

    fetchPosts();
  }, []);

  const addMovie = (newMovie) => {
    setMovies([
      ...movies,
      newMovie,
    ]);
  };

  const showUploadedMovies = (uploadedMovies) => {
    setMovies([...movies, ...uploadedMovies]);
  };

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const sortAlphabetically = () => {
    const sortedMovies = movies.sort((movieA, movieB) => (
      movieA.title.localeCompare(movieB.title)));

    setMovies([...sortedMovies]);
  };

  const searchMovie = (e) => {
    const { value } = e.target;

    setSearchQuery(value.toLowerCase());
  };

  const isActorIncluded = actors => (
    actors.find(actor => actor.toLowerCase().includes(searchQuery)));

  const filteredMovies = movies.filter(movie => (
    movie.title.toLowerCase().includes(searchQuery)
      || isActorIncluded(movie.actors)));

  return (
    <div className="container">
      <NewMovieForm addMovie={addMovie} />
      <FileUpload showUploadedMovies={showUploadedMovies} />
      <div className="movieList-title">Movie list</div>
      <button
        type="button"
        className="sort-btn"
        onClick={sortAlphabetically}
      >
        Sort movies alphabetically
      </button>
      <input
        type="text"
        className="search-input"
        onChange={searchMovie}
        placeholder="Enter a title or an actor"
      />
      <MovieList movies={filteredMovies} removeMovie={removeMovie} />
    </div>
  );
};
