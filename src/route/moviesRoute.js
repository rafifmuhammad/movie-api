const {
  getAllMoviesHandler,
  getMoviesByIdHandler,
  addMovieHandler,
  updateMovieByIdHandler,
  deleteMovieByIdHandler,
} = require('../handler/moviesHandler');

const movieRoute = [
  {
    method: 'GET',
    path: '/movies',
    handler: getAllMoviesHandler,
  },
  {
    method: 'GET',
    path: '/movies/{movieId}',
    handler: getMoviesByIdHandler,
  },
  {
    method: 'POST',
    path: '/movies',
    handler: addMovieHandler,
  },
  {
    method: 'PUT',
    path: '/movies/{movieId}',
    handler: updateMovieByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/movies/{movieId}',
    handler: deleteMovieByIdHandler,
  },
];

module.exports = movieRoute;
