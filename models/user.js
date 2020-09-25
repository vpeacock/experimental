const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const UnauthorizedError = require('../errors/unauthorized-err');
const { statusMessages } = require('../settings/messages');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, (statusMessages.nameMinLength)],
    maxlength: [30, (statusMessages.nameMaxLength)],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [{
      validator: (email) => validator
        .isEmail(email),
      message: (statusMessages.invalidEmailFormat),
    }],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});
userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError(statusMessages.invalidAuthDataError);
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError(statusMessages.invalidAuthDataError);
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
