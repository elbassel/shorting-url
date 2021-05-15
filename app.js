const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const files = path.join(__dirname, './docs/swagger-ui');
const oaSpecs = path.join(__dirname, './api.yaml');
app.use('/swagger-ui', express.static(files));
app.use('/swagger-ui/api.yaml', express.static(oaSpecs));
app.use('/docs', (req, res) => {
  const view = path.join(__dirname, './docs/swagger-ui/index.html');
  return res.sendFile(view);
});


require('./db')

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json(err.message);
});

module.exports = app;
