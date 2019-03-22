var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.new_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

module.exports.all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
}

module.exports.get_user = function(req, res) {
  //console.log(req.params.username);
  User.findOne({"username":req.params.username}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
}
