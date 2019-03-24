var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

function verifyPassword(user, password) {
  return (user.password == password);
}

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      } else if (!user) {
        return done(null, false);
      } else if (!verifyPassword(user, password)) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    });
  }
));

passport.serializeUser(function(user, done) {
  console.log("SERIALIZE");
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log("DESERIALIZE");
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
