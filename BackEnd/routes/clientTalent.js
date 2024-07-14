const express = require('express')
const router = express.Router()

const {addClientTalent,getClientTalents,getClientAppliedTalents} = require('../controllers/clientTalent.js')

router.get('/getAll', getClientTalents)
router.get('/getAllTalent',getClientAppliedTalents)
router.post('/add', addClientTalent)

module.exports = router