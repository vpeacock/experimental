const { Joi } = require('celebrate');
const { validatorEmail } = require('../validators/validator-email');
const { joyErrorMessages } = require('./messages');
const { validatorUrl } = require('../validators/validator-url');

const signinValidation = {
  body: Joi.object().keys({
    email: Joi.string().required().custom(validatorEmail).trim()
      .messages({
        'any.required': joyErrorMessages.requiredFormField,
        'string.empty': joyErrorMessages.emptyParam,
        'any.custom': joyErrorMessages.incorrectEmail,
      }),
    password: Joi.string().required().min(8).trim()
      .messages({
        'any.required': joyErrorMessages.requiredFormField,
        'string.empty': joyErrorMessages.emptyParam,
        'string.min': joyErrorMessages.passwordMin,
      }),
  }),
};

const signupValidation = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .trim()
      .pattern(/^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/)
      .messages({
        'any.required': joyErrorMessages.requiredFormField,
        'string.pattern.base': joyErrorMessages.nameValidation,
        'string.empty': joyErrorMessages.emptyParam,
        'string.max': joyErrorMessages.nameMax,
        'string.min': joyErrorMessages.nameMin,
      }),
    email: Joi.string().required().custom(validatorEmail).trim()
      .messages({
        'any.required': joyErrorMessages.requiredFormField,
        'string.empty': joyErrorMessages.emptyParam,
      }),
    password: Joi.string().required().min(8).trim()
      .messages({
        'any.required': joyErrorMessages.requiredFormField,
        'string.empty': joyErrorMessages.emptyParam,
      }),
  }),
};

const articleValidation = {
  body: Joi.object().keys({
    keyword: Joi.string().required()
      .trim()
      .messages({
        'any.required': joyErrorMessages.requiredFormField,
        'string.empty': joyErrorMessages.emptyParam,
      }),
    title: Joi.string().required()
      .trim()
      .messages({
        'any.required': joyErrorMessages.requiredFormField,
        'string.empty': joyErrorMessages.emptyParam,
      }),
    text: Joi.string().required()
      .trim()
      .messages({
        'any.required': joyErrorMessages.requiredFormField,
        'string.empty': joyErrorMessages.emptyParam,
      }),
    source: Joi.string().required()
      .trim()
      .messages({
        'any.required': joyErrorMessages.requiredFormField,
        'string.empty': joyErrorMessages.emptyParam,
      }),
    link: Joi.string().required().custom(validatorUrl).trim()
      .messages({
        'any.required': joyErrorMessages.requiredFormField,
        'string.empty': joyErrorMessages.emptyParam,
        'any.custom': joyErrorMessages.incorrectUrl,
      }),
    image: Joi.string().required().custom(validatorUrl).trim()
      .messages({
        'any.required': joyErrorMessages.requiredFormField,
        'string.empty': joyErrorMessages.emptyParam,
        'any.custom': joyErrorMessages.incorrectUrl,
      }),
    date: Joi.string().required().trim()
      .messages({
        'any.required': joyErrorMessages.requiredFormField,
        'string.empty': joyErrorMessages.emptyParam,
      }),
  }),
};

module.exports = {
  signinValidation,
  signupValidation,
  articleValidation,
};
