const express = require('express');
const router = express.Router();
const { getAllFlights } = require('../controllers/flightController');

router.get('/', getAllFlights);

module.exports = router;
