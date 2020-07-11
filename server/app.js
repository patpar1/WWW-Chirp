const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Promise = require('bluebird');
const cors = require('cors');

// Routers
const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');

const app = express();

// Set up environment variables
const dotenv = require('dotenv');
dotenv.config();

// Set up mongoose connection
const mongoose = require('mongoose');
const { env } = require('process');

const mongoDB = process.env.MONGO_URL || "mongodb://mongo:27017";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error."));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use routers
app.use('/', indexRouter);
app.use('/posts', postsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
