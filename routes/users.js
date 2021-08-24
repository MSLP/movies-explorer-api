const router = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');

router.get('/users/me', getUser);
router.patch('/users/me', updateUser);

module.exports = router;
