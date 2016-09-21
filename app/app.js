'use strict';

// BASE SETUP
// ======================================================================

const express = require('express'),
      path    = require('path'),
      hbs     = require('express-handlebars'),
      port    = Number(process.env.PORT || 3000),
      app     = express();

// VIEW ENGINE SETUP
// ======================================================================

app.set('view engine', 'hbs');

// Configure the view engine
app.engine('hbs', hbs({
  layoutsDir: path.join(__dirname, './views/layouts'),
  defaultLayout: path.join(__dirname, './views/layouts/layout.hbs')
}));

// Configure the views path
app.set('views', path.join(__dirname, './views'));

// ROUTES
// ======================================================================

app.use('/', require('./routes'));

// STATIC ASSETS
// ======================================================================

app.use(express.static(__dirname + '/public'));

// 404 ERROR HANDLING
// ======================================================================

module.exports = (app) => {
  app.use((req, res, next) => {
    const err = new Error('File Not Found');
    err.status = 404;
    next(err);
  });
}

// ERROR HANDLING
// ======================================================================

module.exports = (app) => {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', { message: err.message });
  });
}

// START THE SERVER
// ======================================================================

app.listen(port, function() {
  console.log(`App running on port ${port}`);
});
