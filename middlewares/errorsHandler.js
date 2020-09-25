const { statusMessages } = require('../settings/messages');

module.exports.errorsHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? (statusMessages.serverError)`${err.message}` : message,
  });
  next();
};
