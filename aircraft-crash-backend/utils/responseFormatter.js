// utils/responseFormatter.js

const formatSuccess = (data, message = 'Success') => ({
  status: 'success',
  message,
  data
});

const formatError = (error, message = 'Error') => ({
  status: 'error',
  message,
  error: error instanceof Error ? error.message : error
});

module.exports = {
  formatSuccess,
  formatError
};
