const express = require('express')

const router = express.Router()

const contactController = require('../controllers/contactController')

// create
router.post('/', contactController.create)

module.exports = router