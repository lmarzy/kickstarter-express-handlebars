'use strict';

const testData = require('../models/test');

const pageData = {
  title: 'Home page',
  testData
};

module.exports = router => {

  router.get('/', (req, res) => {
    res.render('index', pageData);
  });

};
