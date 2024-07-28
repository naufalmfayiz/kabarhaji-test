const User = require("../models/users");

class UserController {
  static async createUser(req, res, next) {
    try {
      const newUser = await User.createUser(req.body);
      res.status(201).json({ message: "User created", newUser });
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { access_token, name } = await User.login(req.body);
      res.status(200).json({ access_token, name });
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }

  static async getUsers(req, res, next) {
    try {
      const users = await User.getUsers();
      res.status(200).json(users);
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const user = await User.getUserById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const user = await User.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const user = await User.deleteUser(req.params.id);
      res.status(200).json({ message: "User deleted", user });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = UserController;
