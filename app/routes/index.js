const express = require('express'),
      router  = express.Router();

const pages = [
  './home'
];

pages.forEach(page => {
  require(page)(router);
});

module.exports = router;
