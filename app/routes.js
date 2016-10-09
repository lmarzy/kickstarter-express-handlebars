// ROUTES

const express         = require('express');
const router          = express.Router();
const homeController  = require('./controllers/home.controller');
const errorController = require('./controllers/error.controller');

router.get('/', homeController);

// Error catching for all non matched routes (must be last);
router.use(errorController);

// router.get('/', homeController);
// router.use(errorController);

module.exports = router;
