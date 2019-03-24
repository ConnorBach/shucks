module.exports = function(app) {
  var auth = require('../controllers/AuthController');

  /*app.get('/auth', passport.authenticate('basic',
    function(req, res) {
      res.json({ id: req.user.id, username: req.user.username });
    });*/
  app.route('/auth')
    .get(auth.verify)
    .post(auth.login);

  app.route('/logout')
    .get(auth.logout);
};
