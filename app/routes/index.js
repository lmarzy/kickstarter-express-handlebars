const express = require('express'),
      router  = express.Router(),
      pages   = [ './home' ];


pages.forEach(page => {
  require(page)(router);
});

module.exports = router;
