const express = require('express')
const router = express.Router()
const vehicleController = require('../controllers/vehicles')

// GET VEHICLES
router.get('/vehicles', vehicleController.list);

// GET VEHICLES BY ID
router.get('/vehicles/:id', vehicleController.show)

// CREATE NEW VEHICLE
router.post('/vehicles', vehicleController.create);

module.exports = router