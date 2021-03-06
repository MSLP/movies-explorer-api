const { celebrate, Joi } = require('celebrate');
const { isURL } = require('validator');
const {
  emailValidation, requireMessage, minLength, maxLength, urlValidation,
} = require('../constants');

const validateUserBodyUpdate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message(emailValidation)
      .messages({ 'any.required': requireMessage }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': minLength,
        'string.max': maxLength,
        'any.required': requireMessage,
      }),
  }),
});

const validateUserBodyCreate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message(emailValidation)
      .messages({ 'any.required': requireMessage }),
    password: Joi.string().required()
      .messages({ 'any.required': requireMessage }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': minLength,
        'string.max': maxLength,
        'any.required': requireMessage,
      }),
  }),
});

const validateAuthentication = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message(emailValidation)
      .messages({ 'any.required': requireMessage }),
    password: Joi.string().required()
      .messages({ 'any.required': requireMessage }),
  }),
});

const validateMovieBody = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required()
      .messages({ 'any.required': requireMessage }),
    director: Joi.string().required()
      .messages({ 'any.required': requireMessage }),
    duration: Joi.number().required()
      .messages({ 'any.required': requireMessage }),
    year: Joi.string().required()
      .messages({ 'any.required': requireMessage }),
    description: Joi.string().required()
      .messages({ 'any.required': requireMessage }),
    image: Joi.string().required().custom((value, helpers) => {
      if (isURL(value)) return value;
      return helpers.message(urlValidation);
    })
      .messages({ 'any.required': requireMessage }),
    trailer: Joi.string().required().custom((value, helpers) => {
      if (isURL(value)) return value;
      return helpers.message(urlValidation);
    })
      .messages({ 'any.required': requireMessage }),
    thumbnail: Joi.string().required().custom((value, helpers) => {
      if (isURL(value)) return value;
      return helpers.message(urlValidation);
    })
      .messages({ 'any.required': requireMessage }),
    movieId: Joi.number().required()
      .messages({ 'any.required': requireMessage }),
    nameRU: Joi.string().required()
      .messages({ 'any.required': requireMessage }),
    nameEN: Joi.string().required()
      .messages({ 'any.required': requireMessage }),
  }),
});

module.exports = {
  validateUserBodyUpdate, validateUserBodyCreate, validateAuthentication, validateMovieBody,
};
