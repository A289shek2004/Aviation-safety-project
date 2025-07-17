// models/CrashRecord.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const CrashRecord = sequelize.define('CrashRecord', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  flightNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cause: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fatalities: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  aircraftType: {
    type: DataTypes.STRING,
    allowNull: true
  },
  airline: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'crash_records',
  timestamps: false
});

module.exports = CrashRecord;
