require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {
  celebrate, errors,
} = require('celebrate');
const routerArticles = require('./routes/articles');
const routerUsers = require('./routes/users');
const { errorsHandler } = require('./middlewares/errorsHandler');
const { login, createUser } = require('./controllers/users');
const { dbParams } = require('./settings/paramsdb.js');
const config = require('./config.js');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { signinValidation, signupValidation } = require('./settings/validation_options.js');
const { limiter } = require('./middlewares/rateLimiter.js');

const app = express();

app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect(config.DATABASE_URL, dbParams);

app.use(requestLogger);

app.post('/signin', celebrate(signinValidation), login);

app.post('/signup', celebrate(signupValidation), createUser);

app.use(auth);
app.use('/articles', routerArticles);
app.use('/users', routerUsers);

app.use(errorLogger);
app.use(errors());
app.use(errorsHandler);

app.listen(config.PORT, () => {
  console.log(` (ツ) App listening on port ${config.PORT}`);
});
