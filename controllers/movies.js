const Movie = require('../models/movie');
const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const ForbiddenError = require('../errors/forbidden-err');

const { respNoMoviesAtAll, respNoMoviesWithId, respMovieDeleted } = require('../constants');

const getMovies = (req, res, next) => Movie.find({})
  .then((movies) => {
    if (!movies.length) next(new NotFoundError(respNoMoviesAtAll));
    else res.status(200).send(movies);
  })
  .catch(next);

const addMovie = (req, res, next) => {
  const data = { ...req.body, owner: req.user._id };
  return Movie.create(data)
    .then((movie) => res.status(200).send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') next(new BadRequestError());
      next(err);
    });
};

const deleteMovie = (req, res, next) => Movie.findById({ _id: req.params.id })
  .then((movie) => {
    if (movie.owner.toString() === req.user._id.toString()) {
      movie.remove();
      res.status(200).send({ message: respMovieDeleted });
    } else next(new ForbiddenError());
  })
  .catch((err) => {
    if (err.name === 'CastError') next(new BadRequestError());
    if (err.name === 'TypeError') next(new NotFoundError(respNoMoviesWithId));
    next(err);
  });

module.exports = { getMovies, addMovie, deleteMovie };
