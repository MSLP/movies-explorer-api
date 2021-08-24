const { forbiddenErrorDefault } = require('../constants');

class ForbiddenError extends Error {
  constructor(message = forbiddenErrorDefault) {
    super(message);
    this.statusCode = 403;
  }
}

module.exports = ForbiddenError;
