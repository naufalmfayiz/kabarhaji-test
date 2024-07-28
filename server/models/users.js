const { ObjectId } = require("mongodb");
const { UserCollection } = require("../config/collections");
const { createToken } = require("../helpers/jwt");
const { hashedPassword, checkPassword } = require("../helpers/bcrypt");
const userSchema = require("../schema/userSchema");

class User {
  static async createUser(data) {
    try {
      userSchema.parse(data);

      const isEmailExist = await UserCollection.findOne({ email: data.email });
      if (isEmailExist) {
        throw { name: "UniqueEmail" };
      }

      const hashedpassword = hashedPassword(data.password);
      data.password = hashedpassword;

      const newUser = await UserCollection.insertOne(data, {
        returnDocument: "after",
      });
      return newUser;
    } catch (error) {
      // console.log(error.errors[0].message);
      throw error;
    }
  }

  static async login(data) {
    try {
      const { email, password } = data;
      const user = await UserCollection.findOne({ email });
      if (!user) {
        throw { name: "InvalidUser" };
      }
      const isPasswordMatch = checkPassword(password, user.password);
      if (!isPasswordMatch) {
        throw { name: "InvalidUser" };
      }

      const name = user.name;
      let access_token = createToken({
        id: user._id,
      });
      return { access_token, name };
    } catch (error) {
      throw error;
    }
  }

  static async getUsers() {
    try {
      const users = await UserCollection.find().toArray();
      return users;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id) {
    try {
      const user = await UserCollection.findOne({ _id: new ObjectId(id) });
      if (!user) {
        throw { name: "NotFound" };
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, data) {
    try {
      userSchema.parse(data);
      const user = await UserCollection.findOne({ _id: new ObjectId(id) });
      if (!user) {
        throw { name: "NotFound" };
      }

      data.password = hashedPassword(data.password);

      const updatedUser = await UserCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: data },
        { returnDocument: "after" }
      );

      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const user = await UserCollection.findOne({ _id: new ObjectId(id) });
      if (!user) {
        throw { name: "NotFound" };
      }

      const deletedUser = await UserCollection.findOneAndDelete({
        _id: new ObjectId(id),
      });

      return deletedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
