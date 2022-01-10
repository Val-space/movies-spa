/* eslint-disable */ 
export const PostMoviesToServer = (movie) => {
  return fetch('http://localhost:8000/api/v1/movies', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI0OTcyMjYwfQ.X31cryg_A126WLYT96PD-SLLFWSxb2SeoQZ4cvx3VhU',
    },

    body: JSON.stringify(movie),
  })
    .then(response => response.json());
};

export const GetMoviesFromServer = () => {  
  return fetch('http://localhost:8000/api/v1/movies?sort=year&order=DESC&limit=10&offset=0', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI0OTcyMjYwfQ.X31cryg_A126WLYT96PD-SLLFWSxb2SeoQZ4cvx3VhU',
    },
    body: JSON.stringify(),
  })
    .then(response => response.json())
};
