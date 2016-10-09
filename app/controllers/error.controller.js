// ERROR Controller

module.exports = function(req, res, next) {
  const err = new Error('File Not Found');
  const viewData = {
    title: 'Error',
    errorMsg: err.message
  }

  res.status(404);
  return res.render('error', viewData);
};
