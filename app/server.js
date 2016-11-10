'use strict';

// BASE SETUP
// ======================================================================

const express = require('express'),
      path    = require('path'),
      hbs     = require('express-handlebars'),
      helpers = require('../public/views/helpers'),
      morgan  = require('morgan'),
      app     = express();

// MORGAN (Logging)
// ======================================================================

app.use(morgan('dev'))

// STATIC ASSETS
// ======================================================================

app.use(express.static(__dirname + '/public'));

// VIEW ENGINE SETUP
// ======================================================================

app.set('view engine', 'hbs');

// Configure the view engine
app.engine('hbs', hbs({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, '../public/views/layouts'),
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, '../public/views/partials'),
  helpers: helpers
}));

// Configure the views path
app.set('views', path.join(__dirname, '../public/views'));

// ROUTES
// ======================================================================

app.use('/', require('./routes'));

module.exports = app;
