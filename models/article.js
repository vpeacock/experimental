const mongoose = require('mongoose');
const validator = require('validator');
const { statusMessages } = require('../settings/messages');

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
    validate: {
      validator: (value) => !validator.isEmpty(value, { ignore_whitespace: true }),
      message: statusMessages.emptyParams,
    },
  },
  title: {
    type: String,
    required: true,
    validate: {
      validator: (value) => !validator.isEmpty(value, { ignore_whitespace: true }),
      message: statusMessages.emptyParams,
    },
  },
  text: {
    type: String,
    required: true,
    validate: {
      validator: (value) => !validator.isEmpty(value, { ignore_whitespace: true }),
      message: statusMessages.emptyParams,
    },
  },
  date: {
    type: String,
    required: [true, (statusMessages.emptyParams)],
  },
  source: {
    type: String,
    required: [true, (statusMessages.emptyParams)],
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isURL(value),
      message: (statusMessages.invalidUrlFormat),
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isURL(value),
      message: (property) => `${property.value}`(statusMessages.invalidUrlFormat),
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
});

module.exports = mongoose.model('article', articleSchema);
