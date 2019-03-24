var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport');

module.exports.verify = function(req, res) {
  //console.log(res);
  //console.log("outside");
  passport.authenticate('local', function(_req, _res) {
    res.sendStatus(403);
  })(req, res);

};

module.exports.login = function(req, res) {
  //console.log("outside");
  passport.authenticate('local', function(_req, _res) {
    res.sendStatus(200);
  //res.send(200);
    console.log("inside");
    //res.redirect('/testing123');
  })(req, res);
};

module.exports.logout = function(req, res) {
  req.logout();
};
