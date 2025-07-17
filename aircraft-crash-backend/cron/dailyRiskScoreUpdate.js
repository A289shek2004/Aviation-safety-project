// cron/dailyRiskScoreUpdate.js

const schedule = require('node-schedule');
const CrashAnalysisService = require('../services/crashAnalysisService');
const logger = require('../utils/logger');

// Schedule this job to run every day at midnight (00:00)
schedule.scheduleJob('0 0 * * *', async function () {
  logger.info('Running daily crash risk score update...');

  try {
    const updatedRecords = await CrashAnalysisService.updateDailyRiskScores();
    logger.info(`Successfully updated risk scores for ${updatedRecords} records.`);
  } catch (error) {
    logger.error('Error updating daily risk scores:', error);
  }
});
