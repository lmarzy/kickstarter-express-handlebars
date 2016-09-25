const express = require('express');
const router  = express.Router();

const pages = [
  './home'
];

pages.forEach(page => {
  require(page)(router);
});

module.exports = router;
