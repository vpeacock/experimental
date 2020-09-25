const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const UnauthorizedError = require('../errors/unauthorized-err');
const BadRequestError = require('../errors/bad-request-err');
const ConflictError = require('../errors/conflict-err');
const { statusMessages } = require('../settings/messages');

const createUser = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, email, password: hash,
    }))
    .then((user) => {
      res.status(201).send({
        data: {
          name: user.name,
          email: user.email,
        },
      });
    })
    .catch((err) => {
      let error;
      if (err.name === 'ValidationError') {
        error = new BadRequestError(statusMessages.invalidUserData);
        return next(error);
      } if ((err.name === 'MongoError' && err.code === 11000)) {
        error = new ConflictError(statusMessages.userEmailBusy);
        return next(error);
      }
      return next(err);
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const { NODE_ENV, JWT_SECRET } = process.env;
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      })
        .end(statusMessages.successfulAuthorization);
    })

    .catch((err) => {
      let error;
      if (err.name === 'DocumentNotFoundError') {
        error = new UnauthorizedError(statusMessages.unauthorizedError);
        return next(error);
      }
      return next(err);
    });
};

const getUser = (req, res, next) => {
  console.log();
  User.findById(req.user._id)
    .orFail()
    .then((user) => res.send({ name: user.name, email: user.email }))
    .catch(next);
};

module.exports = {
  createUser,
  login,
  getUser,
};
