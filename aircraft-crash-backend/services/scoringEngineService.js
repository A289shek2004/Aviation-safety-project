// services/scoringEngineService.js

const Flight = require('../models/flightModel');

/**
 * Compute risk score for a flight
 * Example scoring: 
 *  - older planes, low maintenance → higher risk
 *  - bad weather conditions → higher risk
 */
const computeRiskScore = (flight) => {
  let score = 0;

  // Age of aircraft
  const age = new Date().getFullYear() - new Date(flight.aircraft.manufactured).getFullYear();
  if (age > 15) score += 20;
  if (age > 25) score += 30;

  // Maintenance history
  if (!flight.aircraft.lastMaintenance || new Date() - new Date(flight.aircraft.lastMaintenance) > 180 * 24 * 3600 * 1000) {
    score += 25;
  }

  // Weather condition
  if (flight.weather && flight.weather === 'bad') {
    score += 25;
  }

  // Pilot experience
  if (flight.pilot && flight.pilot.yearsExperience < 5) {
    score += 20;
  }

  return Math.min(score, 100); // Ensure score is between 0-100
};

/**
 * Daily update for all flights in DB
 */
const updateDailyRiskScores = async () => {
  const flights = await Flight.find();
  const updates = [];

  for (const flight of flights) {
    const score = computeRiskScore(flight);
    flight.riskScore = score;
    updates.push(flight.save());
  }

  await Promise.all(updates);
};

module.exports = {
  computeRiskScore,
  updateDailyRiskScores
};
