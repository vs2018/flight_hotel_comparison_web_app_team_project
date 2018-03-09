const MongoClient = require('mongodb').MongoClient;
const ObjectID    = require('mongodb').ObjectID;

const MongoConnection = function() {
  this.database = null;
  this.makeConnection();
}

MongoConnection.prototype.makeConnection = function() {
  MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    if(err) {
      console.log(`Error connecting: ${err}`);
      return;
    }

    this.database = client.db('flight_app_database');
    console.log('Connected to database');
  }.bind(this))
}

MongoConnection.prototype.convertId = function(stringId) {
  return ObjectID(stringId);
}

module.exports = MongoConnection;
