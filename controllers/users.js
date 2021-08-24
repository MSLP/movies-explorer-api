const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const UnauthorizedError = require('../errors/unauthorized-err');
const ConflictError = require('../errors/conflict-err');

const { respNoUserWithId, respEmailExists, respWrongEmailOrPassword } = require('../constants');
const { JWT_SECRET } = require('../config');

const getUser = (req, res, next) => User.findOne({ _id: req.user._id })
  .then((user) => {
    if (user) res.status(200).send(user);
    else next(new NotFoundError(respNoUserWithId));
  })
  .catch((err) => {
    if (err.name === 'CastError') next(new BadRequestError());
    next(err);
  });

const updateUser = (req, res, next) => {
  const data = { ...req.body };
  User.findByIdAndUpdate(req.user._id, data, { new: true, runValidators: true })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'CastError') next(new BadRequestError());
      next(err);
    });
};

const addUser = (req, res, next) => {
  const data = { ...req.body };
  return bcrypt.hash(data.password, 10)
    .then((hash) => User.create({ name: data.name, email: data.email, password: hash }))
    .then((newUser) => {
      const userDoc = newUser._doc;
      delete userDoc.password;
      res.status(200).send(newUser);
    })
    .catch((err) => {
      if (err.code === 11000) next(new ConflictError(respEmailExists));
      if (err.name === 'ValidationError') next(new BadRequestError());
      next(err);
    });
};

const login = (req, res, next) => {
  const data = { ...req.body };
  User.findOne({ email: data.email }).select('+password')
    .then((user) => {
      if (user) {
        bcrypt.compare(data.password, user.password)
          .then((matched) => {
            if (!matched) next(new UnauthorizedError(respWrongEmailOrPassword));
            else {
              const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' });
              res.status(200).send({ token });
            }
          });
      } else next(new UnauthorizedError(respWrongEmailOrPassword));
    })
    .catch(next);
};

module.exports = {
  getUser, updateUser, addUser, login,
};
