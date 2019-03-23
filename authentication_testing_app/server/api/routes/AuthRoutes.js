module.exports = function(app) {
  var auth = require('../controllers/AuthController');

  app.route('/auth')
    .get(auth.verify)
    .post(auth.login);
};
