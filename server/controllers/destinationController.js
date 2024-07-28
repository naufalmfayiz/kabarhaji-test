const Destination = require("../models/destinations");

class DestinationController {
  static async getDestinations(req, res, next) {
    try {
      const destinations = await Destination.getDestinations();
      res.status(200).json(destinations);
    } catch (error) {
      next(error);
    }
  }

  static async getDestinationBySlug(req, res, next) {
    try {
      const destination = await Destination.getDestinationBySlug(
        req.params.slug
      );
      res.status(200).json(destination);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DestinationController;
