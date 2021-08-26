const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { addUser, login } = require('../controllers/users');
const { validateUserBodyCreate, validateAuthentication } = require('../middlewares/validations');
const { NotFoundError } = require('../errors/not-found-err');

router.post('/signup', validateUserBodyCreate, addUser);
router.post('/signin', validateAuthentication, login);
router.use(auth);
router.use('/', userRouter);
router.use('/', movieRouter);
router.use('*', (req, res, next) => next(new NotFoundError('Страница не найдена')));

module.exports = router;
