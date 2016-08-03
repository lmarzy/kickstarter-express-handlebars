'use strict';

var express = require('express'),
    path    = require('path'),
    hbs     = require('express-handlebars'),
    port    = Number(process.env.PORT || 3000),
    app;

app = express();

// Set the view engine
app.set('view engine', 'hbs');

// Configure the view engine
app.engine('hbs', hbs({
  layoutsDir: path.join(__dirname, '/views/layouts'),
  defaultLayout: path.join(__dirname, '/views/layouts/layout.hbs')
}));

// Configure the views path
app.set('views', path.join(__dirname, '/views'));

// Routes
app.get('/', function(req, res) {
  var pageData = {
    title: 'Express Handlebars'
  }
  res.render('index', pageData);
});

// Set app to listen on a port
app.listen(port, function() {
  console.log('App running');
});
