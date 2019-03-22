module.exports = function(app) {
  var user = require('../controllers/UserController');

  app.route('/users')
    .post(user.new_user)
    .get(user.all_users);

  app.route('/users/:username')
    .get(user.get_user);
};
