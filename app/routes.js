// ROUTES

const express = require('express');
const router  = express.Router();
const core = require('./controllers/core');

router.get('/', core.home);

module.exports = router;
