const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-err');
const JWT_SECRET = require('../config');

const extractBearerToken = (header) => header.replace('Bearer ', '');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) next(new UnauthorizedError('Пользователь не зарегистрирован'));
  else {
    const token = extractBearerToken(authorization);
    let payload;

    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (e) {
      next(new UnauthorizedError('Пользователь не зарегистрирован'));
    }

    req.user = payload;
    next();
  }
};

module.exports = auth;
