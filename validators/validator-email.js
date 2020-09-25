const validator = require('validator');
const BadRequestError = require('../errors/bad-request-err');

module.exports.validatorEmail = (email) => {
  if (!validator.isEmail(email)) {
    throw new BadRequestError('Данные запроса введены некорректно');
  }
  return email;
};
