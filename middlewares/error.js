const { serverErrorDefault } = require('../constants');

const error = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? serverErrorDefault : message });
  next();
};

module.exports = error;
