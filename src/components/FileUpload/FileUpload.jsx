import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function FileUpload({ showUploadedMovies }) {
  const [uploadedMovies, setUploadedMovies] = useState([]);
  const handleFile = (e) => {
    const content = e.target.result;
    // eslint-disable-next-line
    const parseMovies = content.split(/\n\r\n/).map(movie => {
      const movieProperties = movie.trim().split(/\r\n/);

      const movieValue = movieProperties.map((property) => {
        const value = property.split(': ');

        return value[1];
      });

      return {
        id: movieValue[0] + movieValue[1],
        title: movieValue[0],
        year: movieValue[1],
        format: movieValue[2],
        actors: movieValue[3].split(', '),
      };
    });

    setUploadedMovies(parseMovies);
  };

  const handleChangeFile = (file) => {
    const fileData = new FileReader();

    fileData.onloadend = handleFile;
    fileData.readAsText(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".txt"
        onChange={e => handleChangeFile(e.target.files[0])}
      />
      <button
        type="button"
        onClick={() => {
          showUploadedMovies(uploadedMovies);
          setUploadedMovies([]);
        }}
      >
        Show Movies
      </button>
    </div>
  );
}

FileUpload.propTypes = {
  showUploadedMovies: PropTypes.func.isRequired,
};
