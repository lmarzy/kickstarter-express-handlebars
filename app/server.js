'use strict';

// BASE SETUP
// ======================================================================

const express = require('express'),
      path    = require('path'),
      hbs     = require('express-handlebars'),
      app     = express();

// VIEW ENGINE SETUP
// ======================================================================

app.set('view engine', 'hbs');

// Configure the view engine
app.engine('hbs', hbs({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, '../public/views/layouts'),
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, '../public/views/partials'),
}));

// Configure the views path
app.set('views', path.join(__dirname, '../public/views'));

// ROUTES
// ======================================================================

app.use('/', require('./routes'));

// STATIC ASSETS
// ======================================================================

app.use(express.static(__dirname + '/public'));

// 404 ERROR HANDLING
// ======================================================================

app.use((req, res, next) => {
  const err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// ERROR HANDLING
// ======================================================================

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', { message: err.message });
});

module.exports = app;
