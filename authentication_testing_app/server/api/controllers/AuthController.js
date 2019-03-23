var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport');

module.exports.verify = function(req, res) {
  passport.authenticate('local', function(req, res) {
    res.json({'a':1});
  })(req, res);
};

module.exports.login = function(req, res) {
  console.log("outside");
  passport.authenticate('local', function(_req, _res) {
    console.log('inside');
    res.json({'a':1});
  })(req, res);
};
