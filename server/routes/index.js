const express = require("express");
const router = express.Router();

//HOME
router.get("/", (req, res) => {
  res.status(200).json("Welcome to KabarHaji API");
});

router.use("/users", require("./usersRoute"));

router.use("/destinations", require("./destinationsRoute"));

module.exports = router;
