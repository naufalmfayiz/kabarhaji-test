const express = require("express");
const UserController = require("../controllers/usersController");
const authentication = require("../middlewares/authenticate");
const { authorization } = require("../middlewares/authorize");
const router = express.Router();

//Create User
router.post("/", UserController.createUser);
//GET ALL USERS
router.get("/", UserController.getUsers);
//LOGIN
router.post("/login", UserController.login);
//GET USERBYID
router.get("/:id", authentication, UserController.getUserById);
//UPDATE USERBYID
router.put("/:id", authentication, authorization, UserController.updateUser);
//DELETE USERBYID
router.delete("/:id", authentication, authorization, UserController.deleteUser);

module.exports = router;
