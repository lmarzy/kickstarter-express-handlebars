// HOME Controller

module.exports = function(req, res) {
  const viewData = {
    title: 'Home'
  }
  res.render('index', viewData);
};
