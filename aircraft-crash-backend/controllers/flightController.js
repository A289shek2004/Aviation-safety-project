const flightService = require('../services/flightService');

const getAllFlights = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights();
    res.status(200).json(flights);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

module.exports = { getAllFlights };
