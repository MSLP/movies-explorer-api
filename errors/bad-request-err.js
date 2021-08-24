const { badRequestErorDefault } = require('../constants');

class BadRequestError extends Error {
  constructor(message = badRequestErorDefault) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = BadRequestError;
