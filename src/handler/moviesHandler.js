const nanoid = require('nanoid');
const movies = require('../data/movies');

const getAllMoviesHandler = () => ({
  status: 'success',
  data: movies,
});

const getMoviesByIdHandler = (request, h) => {
  const { movieId } = request.params;

  const index = movies.find((movie) => movie.movieId === movieId);

  if (index !== -1) {
    return {
      status: 'success',
      data: movies[index],
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'film tidak ditemukan',
  });

  response.code = 404;

  return response;
};

const addMovieHandler = (request, h) => {
  const {
    title, genre, rating, director, image,
  } = request.payload;
  const movieId = nanoid(16);
  const releaseDate = new Date().toISOString();
  const createdAt = new Date().toISOString();

  const newMovie = {
    movieId, title, genre, rating, director, image, releaseDate, createdAt,
  };

  movies.push(newMovie);

  const isSuccess = movies.filter((movie) => movie.movieId === movieId).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'film berhasil ditambahkan',
    });

    response.code = 201;

    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'film gagal ditambahkan',
  });

  return response;
};

const updateMovieByIdHandler = (request, h) => {
  const { movieId } = request.params;
  const {
    title, genre, rating, director, images,
  } = request.payload;

  const index = movies.find((movie) => movie.movieId === movieId);

  if (index !== -1) {
    movies[index] = {
      ...movies,
      title,
      genre,
      rating,
      director,
      images,
    };

    const response = h.response({
      status: 'success',
      data: movies[index],
    });

    response.code = 200;

    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'film gagal diubah',
  });

  response.code = 404;

  return response;
};

const deleteMovieByIdHandler = (request, h) => {
  const { movieId } = request.params;

  const index = movies.find((movie) => movie.movieId === movieId);

  if (index !== -1) {
    movies.splice(index, 1);

    const response = h.response({
      status: 'success',
      message: 'film berhasil dihapus',
    });

    response.code = 200;

    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'film gagal dihapus',
  });

  response.code = 404;

  return response;
};

module.exports = {
  getAllMoviesHandler,
  getMoviesByIdHandler,
  addMovieHandler,
  updateMovieByIdHandler,
  deleteMovieByIdHandler,
};
