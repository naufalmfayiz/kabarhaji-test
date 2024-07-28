const { UserCollection } = require("../config/collections");
const { verifyToken } = require("../helpers/jwt");
const { ObjectId } = require("mongodb");

const authentication = async (req, res, next) => {
  try {
    // console.log(req.headers.authorization);
    let access_token = req.headers.authorization;
    if (!access_token) {
      throw { name: "InvalidToken" };
    }

    let split_token = access_token.split(" ");
    let [bearer, token] = split_token;
    if (bearer !== "Bearer") {
      throw { name: "InvalidToken" };
    }

    let payload = verifyToken(token);
    let user = await UserCollection.findOne({
      _id: new ObjectId(payload.id),
    });
    // console.log(payload);
    // console.log(user);
    if (!user) {
      throw { name: "InvalidToken" };
    }

    req.user = {
      id: user._id.toString(),
    };

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = authentication;
