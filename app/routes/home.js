'use strict';

const pageData = {
  title: 'Home page'
};

module.exports = router => {

  router.get('/', (req, res) => {
    res.render('index', pageData);
  });

};