const { ClientTalent, Client, Talent } = require('../orm');

module.exports = {
  getClientTalents: async (req, res) => {
    try {
      const clientTalents = await ClientTalent.findAll({
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: Talent,
            as: 'talents',
            attributes: ["id", "title", "description", "imageUrl", "price", "category", "rating", "delivery"]
          }
        ]
      });
      res.status(200).json(clientTalents);
    } catch (err) {
      console.error('Error fetching clientTalents:', err);
      res.status(500).json({ error: 'Error fetching clientTalents' });
    }
  },

  addClientTalent: async (req, res) => {
    try {
      const clientTalent = await ClientTalent.create(req.body);
      res.status(201).json(clientTalent);
    } catch (error) {
      console.error('Error adding client talent:', error);
      res.status(409).send(error);
    }
  },

  // Add this route to fetch applied talents for a specific client
  getClientAppliedTalents: async (req, res) => {
    try {
      const clientId = req.params.clientId; // Get clientId from the request parameters
      const appliedTalents = await ClientTalent.findAll({
        where: { clientId },
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: Talent,
            as: 'talents',
            attributes: ["id", "title", "description", "imageUrl", "price", "category", "rating", "delivery"]
          }
        ]
      });
      res.status(200).json(appliedTalents);
    } catch (err) {
      console.error('Error fetching applied talents:', err);
      res.status(500).json({ error: 'Error fetching applied talents' });
    }
  }
};
