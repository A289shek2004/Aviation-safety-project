const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const predictRoutes = require('./routes/predictRoutes');
const flightRoutes = require('./routes/flightRoutes');

const app = express();

app.use('/api/predict-flight-risk', predictRoutes);
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());

// Register routes
app.use('/api/flights', flightRoutes);

module.exports = app;
