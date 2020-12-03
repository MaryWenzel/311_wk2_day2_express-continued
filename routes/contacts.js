const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contacts')

// GET CONTACTS
router.get('/contacts', contactController.list);

// GET CONTACTS BY ID
router.get('/contacts/:id', contactController.show)

  // ADD NEW CONTACT
router.post('/contacts', contactController.create);

module.exports = router