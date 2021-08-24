const router = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');
const { validateUserBodyUpdate } = require('../middlewares/validations');

router.get('/users/me', getUser);
router.patch('/users/me', validateUserBodyUpdate, updateUser);

module.exports = router;
