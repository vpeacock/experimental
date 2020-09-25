const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-err');
const { statusMessages } = require('../settings/messages');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    throw new UnauthorizedError(statusMessages.unauthorizedError);
  }
  let payload;

  try {
    payload = jwt.verify(token, (process.env.JWT_SECRET || 'dev-secret'));
  } catch (err) {
    throw new UnauthorizedError(statusMessages.unauthorizedError);
  }

  req.user = payload;

  return next();
};
