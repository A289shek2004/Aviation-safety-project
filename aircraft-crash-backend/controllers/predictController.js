const { predictFlightRisk } = require('../python/run_predict');

const predictRisk = async (req, res) => {
  try {
    const input = req.body;

    const prediction = await predictFlightRisk(input);
    res.status(200).json({ prediction });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Prediction failed' });
  }
};

module.exports = { predictRisk };
