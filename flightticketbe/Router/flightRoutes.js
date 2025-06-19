const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.post('/', flightController.addFlight);
router.get('/', flightController.getFlights);

module.exports = router;
