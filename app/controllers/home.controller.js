// HOME Controller

module.exports = {

  get(req, res) {
    const viewData = {
      title: 'Home'
    }
    res.render('index', viewData);
  }

};
