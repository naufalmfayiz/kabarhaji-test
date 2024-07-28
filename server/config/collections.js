const { database } = require("./mongodb");

const UserCollection = database.collection("users");
const DestinatonCollection = database.collection("destinations");

module.exports = { UserCollection, DestinatonCollection };
