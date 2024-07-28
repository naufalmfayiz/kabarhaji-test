const express = require("express");
const DestinationController = require("../controllers/destinationController");
const router = express.Router();

//GET ALL DESTINATIONS
router.get("/", DestinationController.getDestinations);

//GET DESTINATION BY SLUG
router.get("/:slug", DestinationController.getDestinationBySlug);

module.exports = router;
