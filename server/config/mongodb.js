const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const database = client.db("kabarHajiDB");

module.exports = { client, database };
