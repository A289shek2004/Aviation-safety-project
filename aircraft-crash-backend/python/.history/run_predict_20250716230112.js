const { spawn } = require('child_process');
const path = require('path');

function predictFlightRisk(inputData) {
  return new Promise((resolve, reject) => {
    const pyPath = path.join(__dirname, 'predict.py');
    const pyProcess = spawn('python', [pyPath, JSON.stringify(inputData)]);

    let result = '';
    pyProcess.stdout.on('data', data => {
      result += data.toString();
    });

    pyProcess.stderr.on('data', data => {
      console.error('Python error:', data.toString());
    });

    pyProcess.on('close', code => {
      if (code !== 0) return reject("Python script failed");
      resolve(JSON.parse(result));
    });
  });
}

module.exports = { predictFlightRisk };
