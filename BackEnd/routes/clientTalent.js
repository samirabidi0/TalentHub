const express = require('express');
const router = express.Router();
const { addClientTalent, getClientTalents, updateClientTalentStatus } = require('../controllers/clientTalent.js');

router.get('/getAll', getClientTalents);
router.post('/add', addClientTalent);
router.put('/:id/updateStatus', updateClientTalentStatus);

module.exports = router;
