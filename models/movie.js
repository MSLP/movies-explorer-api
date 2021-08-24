const mongoose = require('mongoose');
const { isURL } = require('validator');
const { requireMessage, urlValidation } = require('./constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    require: [true, requireMessage],
  },
  director: {
    type: String,
    require: [true, requireMessage],
  },
  duration: {
    type: Number,
    require: [true, requireMessage],
  },
  year: {
    type: String,
    require: [true, requireMessage],
  },
  description: {
    type: String,
    require: [true, requireMessage],
  },
  image: {
    type: String,
    require: [true, requireMessage],
    validate: {
      validator: (v) => isURL(v),
      message: urlValidation,
    },
  },
  trailer: {
    type: String,
    require: [true, requireMessage],
    validate: {
      validator: (v) => isURL(v),
      message: urlValidation,
    },
  },
  thumbnail: {
    type: String,
    require: [true, requireMessage],
    validate: {
      validator: (v) => isURL(v),
      message: urlValidation,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, requireMessage],
  },
  movieId: {
    type: String,
    require: [true, requireMessage],
  },
  nameRU: {
    type: String,
    require: [true, requireMessage],
  },
  nameEN: {
    type: String,
    require: [true, requireMessage],
  },
});

module.exports = mongoose.model('movie', movieSchema);
