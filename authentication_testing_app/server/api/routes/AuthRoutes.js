var passport = require('passport');

module.exports = function(app) {
  app.post('/auth', passport.authenticate('local', {
    successRedirect: '/success',
    failureRedirect: '/invalid'
  }));

  app.get('/auth', passport.authenticate('local', {
    successRedirect: '/success',
    failureRedirect: '/invalid'
  }));

  app.get('/success', function(req, res) {
    console.log('success');
    console.log(req.user);
    res.sendStatus(200);
  });

  app.get('/invalid', function(req, res) {
    console.log('invalid');
    console.log(req.user);
    res.sendStatus(403);
  });

  app.get('/logout', function(req, res) {
    req.logout();
  });
};
