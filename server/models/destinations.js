const { DestinatonCollection } = require("../config/collections");

class Destination {
  static async getDestinations() {
    try {
      const destinations = await DestinatonCollection.find().toArray();
      return destinations;
    } catch (error) {
      throw error;
    }
  }

  static async getDestinationBySlug(slug) {
    try {
      const destination = await DestinatonCollection.findOne({
        slug: slug,
      });
      if (!destination) {
        throw { name: "NotFound" };
      }
      return destination;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Destination;
