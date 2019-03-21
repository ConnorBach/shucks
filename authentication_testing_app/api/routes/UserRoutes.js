module.exports = function(app) {
  var user = require('../controllers/UserController');

  app.route('/users')
    .post(user.new_user);
};
