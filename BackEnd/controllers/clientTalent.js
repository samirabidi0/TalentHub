const { ClientTalent, Client, Talent } = require('../orm');

module.exports = {
    getClientTalents: async (req, res) => {
        try {
            const clientTalents = await ClientTalent.findAll({
                order: [["createdAt", "DESC"]],
                include: [
                    {
                        model: Client,
                        as: 'clients', 
                        attributes: ["id", "name", "email", "adress", "imageUrl", "phoneNumber"],
                    },
                    {
                        model: Talent,
                        as: 'talents', 
                        attributes: ["id", "title", "description", "category", "imageUrl"],
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
            const { clientId, talentId, message } = req.body;
            const newClientTalent = await ClientTalent.create({ clientId, talentId, message });

            res.status(201).json(newClientTalent);
        } catch (error) {
            console.error('Error adding client talent:', error);
            res.status(500).json({ error: 'Failed to add client talent' });
        }
    },

    updateClientTalentStatus: async (req, res) => {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const clientTalent = await ClientTalent.findByPk(id);

            if (!clientTalent) {
                return res.status(404).json({ error: 'Client talent not found' });
            }

            clientTalent.status = status;
            await clientTalent.save();

            res.status(200).json(clientTalent);
        } catch (error) {
            console.error('Error updating client talent status:', error);
            res.status(500).json({ error: 'Failed to update client talent status' });
        }
    }
};
