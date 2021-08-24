const router = require('express').Router();
const { validateMovieBody } = require('../middlewares/validations');
const { getMovies, addMovie, deleteMovie } = require('../controllers/movies');

router.get('/movies', getMovies);
router.post('/movies', validateMovieBody, addMovie);
router.delete('/movies/:id', deleteMovie);

module.exports = router;
