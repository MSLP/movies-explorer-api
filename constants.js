const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const badRequestErorDefault = 'Incorrect data passed.';
const forbiddenErrorDefault = 'You do not have permission to perform this action';
const serverErrorDefault = 'Server error';
const unauthorizedErrorDefault = 'Authorization error';

const respNoUserWithId = 'There is no user with such id.';
const respEmailExists = 'The email is already in use.';
const respWrongEmailOrPassword = 'Incorrect email or password';

const respNoMoviesAtAll = 'There are no movies.';
const respNoMoviesWithId = 'There is no movie with such id.';
const respMovieDeleted = 'The movie has been deleted.';

const uniqueEmail = 'Email must be unqiue.';
const emailValidation = 'Field \'email\' does not match the required format.';
const urlValidation = 'Field \'url\' does not not match the required format.';
const requireMessage = 'Required field is empty.';
const minLength = 'The field must be longer than 2 symbols.';
const maxLength = 'The field must be shorter than 30 symbols.';

module.exports = {
  limiter,
  badRequestErorDefault,
  forbiddenErrorDefault,
  serverErrorDefault,
  unauthorizedErrorDefault,
  respNoUserWithId,
  respEmailExists,
  respWrongEmailOrPassword,
  respNoMoviesAtAll,
  respNoMoviesWithId,
  respMovieDeleted,
  uniqueEmail,
  emailValidation,
  urlValidation,
  requireMessage,
  minLength,
  maxLength,
};
