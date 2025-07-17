import React, { useState } from 'react';
import { 
  Brain, 
  AlertTriangle, 
  TrendingUp, 
  Zap,
  Cloud,
  Wrench,
  User,
  Settings,
  Activity,
  Target
} from 'lucide-react';

const RiskPrediction: React.FC = () => {
  const [selectedFlight, setSelectedFlight] = useState('');
  const [riskScore, setRiskScore] = useState(0);

  const predictRisk = () => {
    // Simulate ML prediction
    const score = Math.floor(Math.random() * 100);
    setRiskScore(score);
  };

  const getRiskLevel = (score: number) => {
    if (score >= 70) return { level: 'High', color: 'text-red-600 bg-red-100' };
    if (score >= 40) return { level: 'Medium', color: 'text-yellow-600 bg-yellow-100' };
    return { level: 'Low', color: 'text-green-600 bg-green-100' };
  };

  const riskFactors = [
    { factor: 'Weather Conditions', impact: 35, icon: Cloud },
    { factor: 'Aircraft Maintenance', impact: 28, icon: Wrench },
    { factor: 'Pilot Experience', impact: 20, icon: User },
    { factor: 'Route Complexity', impact: 17, icon: Target }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Risk Prediction</h1>
          <p className="text-gray-600 mt-2">AI-powered crash risk assessment and prediction</p>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
          <Brain className="w-5 h-5" />
          <span className="font-medium">ML Model Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Prediction Input */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Flight Risk Assessment</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Flight Number</label>
                <input
                  type="text"
                  placeholder="e.g., AA1234"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedFlight}
                  onChange={(e) => setSelectedFlight(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Aircraft Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Boeing 737-800</option>
                  <option>Airbus A320</option>
                  <option>Boeing 777</option>
                  <option>Airbus A330</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Departure Airport</label>
                <input
                  type="text"
                  placeholder="e.g., JFK"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Arrival Airport</label>
                <input
                  type="text"
                  placeholder="e.g., LAX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weather Conditions</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Clear</option>
                  <option>Partly Cloudy</option>
                  <option>Overcast</option>
                  <option>Rain</option>
                  <option>Storm</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pilot Experience (Hours)</label>
                <input
                  type="number"
                  placeholder="e.g., 5000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <button
              onClick={predictRisk}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Predict Risk Score</span>
            </button>
          </div>
          
          {/* Risk Score Display */}
          {riskScore > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Assessment Results</h3>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 mb-4">
                  <span className="text-3xl font-bold text-gray-900">{riskScore}%</span>
                </div>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getRiskLevel(riskScore).color}`}>
                  {getRiskLevel(riskScore).level} Risk
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Risk Factors Analysis</h4>
                {riskFactors.map((factor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <factor.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-sm text-gray-900">{factor.factor}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${factor.impact}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{factor.impact}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Model Info */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">ML Model Info</h3>
              <Settings className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Algorithm</span>
                <span className="text-sm font-medium">XGBoost</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Accuracy</span>
                <span className="text-sm font-medium">94.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Last Updated</span>
                <span className="text-sm font-medium">2 hours ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Training Data</span>
                <span className="text-sm font-medium">50K+ incidents</span>
              </div>
            </div>
          </div>
          
          {/* Recent Predictions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Predictions</h3>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="space-y-3">
              {[
                { flight: 'AA1234', score: 23, level: 'Low' },
                { flight: 'UA5678', score: 67, level: 'Medium' },
                { flight: 'DL9012', score: 89, level: 'High' }
              ].map((prediction, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{prediction.flight}</p>
                    <p className="text-sm text-gray-600">{prediction.level} Risk</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{prediction.score}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* High Risk Alerts */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">High Risk Alerts</h3>
              <AlertTriangle className="w-5 h-5 text-red-500" />
            </div>
            
            <div className="space-y-3">
              {[
                { flight: 'UA9876', issue: 'Severe weather on route', time: '10 min ago' },
                { flight: 'AA3456', issue: 'Aircraft maintenance overdue', time: '1 hour ago' }
              ].map((alert, index) => (
                <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-900">{alert.flight}</p>
                      <p className="text-sm text-red-700">{alert.issue}</p>
                      <p className="text-xs text-red-600 mt-1">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskPrediction;