var passport = require('passport');

module.exports = function(app) {
  app.post('/auth', passport.authenticate('local', {
    successRedirect: '/success',
    failureRedirect: '/invalid'
  }));

  app.get('/auth', function(req, res) {
    if (req.isAuthenticated()) {
      res.redirect('/success');
    } else {
      res.redirect('/invalid');
    }
  });

  app.get('/success', function(req, res) {
    res.sendStatus(200);
  });

  app.get('/invalid', function(req, res) {
    res.sendStatus(403);
  });

  app.get('/logout', function(req, res) {
    req.logout();
    req.session.destroy();
    res.redirect('/success');
  });
};
