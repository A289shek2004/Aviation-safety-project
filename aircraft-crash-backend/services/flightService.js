// services/flightService.js

const pool = require('../config/db');

// Fetch a list of flights from the database
const getAllFlights = async () => {
  try {
    const result = await pool.query('SELECT * FROM flights.flight_info LIMIT 30');
    return result.rows;
  } catch (error) {
    console.error('Error fetching flights:', error);
    throw error;
  }
};

module.exports = {
  getAllFlights
};
