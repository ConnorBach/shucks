var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.new_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, message) {
    if (err)
      res.send(err);
    res.json(message);
  });
};
