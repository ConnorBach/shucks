var passport = require('passport');
var bodyParser = require('body-parser');

module.exports = function(app) {
  var urlencodedParser = bodyParser.urlencoded({extended: false});
  app.post('/auth', passport.authenticate('local', {
    successRedirect: '/success',
    failureRedirect: '/invalid'
  }));

  app.get('/auth', passport.authenticate('local', {
    successRedirect: '/success',
    failureRedirect: '/invalid'
  }));

  app.get('/success', function(req, res) {
    console.log('SUCCESS');
    console.log(req.user);
    res.sendStatus(200);
  });

  app.get('/invalid', function(req, res) {
    console.log('INVALID');
    console.log(req.user);
    res.sendStatus(403);
  });

  app.get('/logout', function(req, res) {
    req.logout();
  });
};
