const { ObjectId } = require("mongodb");
const { UserCollection } = require("../config/collections");

const authorization = async (req, res, next) => {
  try {
    const { id } = req.params;

    // console.log(id, req.user.id);

    if (id !== req.user.id) {
      throw { name: "Forbidden" };
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authorization };
