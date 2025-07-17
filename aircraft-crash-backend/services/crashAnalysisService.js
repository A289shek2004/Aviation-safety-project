// services/crashAnalysisService.js

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Utility to load and process crash data from a CSV file
const loadCrashData = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (err) => reject(err));
  });
};

// Simple analysis: Count total crashes, top crash causes, etc.
const analyzeCrashData = (data) => {
  const totalCrashes = data.length;

  const causeFrequency = {};
  data.forEach((row) => {
    const cause = row.Cause || 'Unknown';
    causeFrequency[cause] = (causeFrequency[cause] || 0) + 1;
  });

  const sortedCauses = Object.entries(causeFrequency).sort((a, b) => b[1] - a[1]);
  const topCauses = sortedCauses.slice(0, 5).map(([cause, count]) => ({ cause, count }));

  return {
    totalCrashes,
    topCauses,
    analyzedAt: new Date().toISOString()
  };
};

// Public API: Perform full crash analysis pipeline
const performCrashAnalysis = async () => {
  try {
    const filePath = path.join(__dirname, '../data/crash_data.csv');
    const data = await loadCrashData(filePath);
    const analysis = analyzeCrashData(data);
    return analysis;
  } catch (error) {
    console.error('Error in crash analysis:', error);
    throw error;
  }
};

module.exports = {
  performCrashAnalysis
};
