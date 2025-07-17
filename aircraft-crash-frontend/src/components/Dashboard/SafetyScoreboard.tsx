import React from 'react';
import { Shield, TrendingUp, TrendingDown } from 'lucide-react';

const SafetyScoreboard: React.FC = () => {
  const airlines = [
    {
      name: 'Delta Airlines',
      score: 96.8,
      change: 2.3,
      trend: 'up',
      color: 'green'
    },
    {
      name: 'United Airlines',
      score: 94.2,
      change: -1.2,
      trend: 'down',
      color: 'yellow'
    },
    {
      name: 'American Airlines',
      score: 93.7,
      change: 0.8,
      trend: 'up',
      color: 'yellow'
    },
    {
      name: 'Southwest Airlines',
      score: 92.1,
      change: -0.5,
      trend: 'down',
      color: 'red'
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 90) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 95) return 'bg-green-100';
    if (score >= 90) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Safety Scoreboard</h3>
        <Shield className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="space-y-3">
        {airlines.map((airline, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{airline.name}</span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${getScoreColor(airline.score)} ${getScoreBg(airline.score)}`}>
                    {airline.score}%
                  </span>
                  <div className="flex items-center space-x-1">
                    {airline.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    <span className={`text-sm ${airline.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {Math.abs(airline.change)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium">
        View Full Rankings
      </button>
    </div>
  );
};

export default SafetyScoreboard;