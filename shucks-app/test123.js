var MongoClient = require('mongodb').MongoClient;


MongoClient.connect("mongodb://test_user:cRZPrM5i9pNXTveC@shuckscluster-shard" +
    "-00-00-x8ody.mongodb.net:27017,shuckscluster-shard-00-01-x8ody.mongodb" +
    ".net:27017,shuckscluster-shard-00-02-x8ody.mongodb.net:27017/test?ssl" +
    "=true&replicaSet=ShucksCluster-shard-0&authSource=admin&retryWrites=true", function (err, client) {
  if (err) throw err;

  var db = client.db('testdb');

  db.collection('messages', function (err, collection) {

    collection.insert({ msg: "test123", username: 'Steve'});
    collection.insert({ msg: "test456", username: 'Bill'});
    collection.insert({ msg: "test789", username: 'James'});

  });

  db.collection('messages').count(function (err, count) {
      if (err) throw err;

      console.log('Total Rows: ' + count);
  });
});
