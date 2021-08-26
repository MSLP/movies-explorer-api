const mongoose = require('mongoose');
const { isEmail } = require('validator');
const {
  uniqueEmail, emailValidation, requireMessage, minLength, maxLength,
} = require('../constants');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, requireMessage],
    unique: [true, uniqueEmail],
    validate: {
      validator: (v) => isEmail(v),
      message: emailValidation,
    },
  },
  password: {
    type: String,
    require: [true, requireMessage],
    select: false,
  },
  name: {
    type: String,
    require: [true, requireMessage],
    minlength: [2, minLength],
    maxlength: [30, maxLength],
  },
});

module.exports = mongoose.model('user', userSchema);
