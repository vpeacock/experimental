const validator = require('validator');
const BadRequestError = require('../errors/bad-request-err');

module.exports.validatorUrl = (link) => {
  if (!validator.isURL(link)) {
    throw new BadRequestError('Данные запроса введены некорректно');
  }
  return link;
};
