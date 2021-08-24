const { unauthorizedErrorDefault } = require('../constants');

class UnauthorizedError extends Error {
  constructor(message = unauthorizedErrorDefault) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
