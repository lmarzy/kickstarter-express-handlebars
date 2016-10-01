// CORE CONTROLLERS

module.exports = {

  home(req, res) {
    res.render('index', { title: 'Home' });
  }

};
