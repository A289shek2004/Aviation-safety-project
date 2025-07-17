import React from 'react';
import { 
  Shield, 
  TrendingUp, 
  TrendingDown, 
  Activity,
  Target,
  Award,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const SafetyMetrics: React.FC = () => {
  const metrics = [
    {
      title: 'Overall Safety Score',
      value: '94.2%',
      change: 2.1,
      trend: 'up',
      icon: Shield,
      color: 'green'
    },
    {
      title: 'Incident Rate',
      value: '0.12/100K',
      change: -15.3,
      trend: 'down',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      title: 'Safety Compliance',
      value: '98.7%',
      change: 1.5,
      trend: 'up',
      icon: CheckCircle,
      color: 'blue'
    },
    {
      title: 'Response Time',
      value: '3.2 min',
      change: -8.7,
      trend: 'down',
      icon: Activity,
      color: 'purple'
    }
  ];

  const airlines = [
    { name: 'Delta Airlines', score: 96.8, rank: 1, change: 0.3 },
    { name: 'Southwest Airlines', score: 95.2, rank: 2, change: -0.1 },
    { name: 'United Airlines', score: 94.7, rank: 3, change: 0.8 },
    { name: 'American Airlines', score: 93.1, rank: 4, change: -0.5 },
    { name: 'JetBlue Airways', score: 92.9, rank: 5, change: 0.2 }
  ];

  const aircraftTypes = [
    { type: 'Boeing 737', score: 95.4, incidents: 23 },
    { type: 'Airbus A320', score: 94.8, incidents: 18 },
    { type: 'Boeing 777', score: 97.2, incidents: 8 },
    { type: 'Airbus A330', score: 96.1, incidents: 12 }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Safety Metrics</h1>
        <p className="text-gray-600 mt-2">Comprehensive safety performance monitoring and analysis</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                <div className="flex items-center mt-2">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 mr-1 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1 text-red-600" />
                  )}
                  <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {Math.abs(metric.change)}%
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${
                metric.color === 'green' ? 'bg-green-100' :
                metric.color === 'red' ? 'bg-red-100' :
                metric.color === 'blue' ? 'bg-blue-100' :
                'bg-purple-100'
              }`}>
                <metric.icon className={`w-6 h-6 ${
                  metric.color === 'green' ? 'text-green-600' :
                  metric.color === 'red' ? 'text-red-600' :
                  metric.color === 'blue' ? 'text-blue-600' :
                  'text-purple-600'
                }`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Airline Rankings */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Airline Safety Rankings</h3>
            <Award className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {airlines.map((airline, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    airline.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                    airline.rank === 2 ? 'bg-gray-100 text-gray-800' :
                    airline.rank === 3 ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {airline.rank}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{airline.name}</p>
                    <p className="text-sm text-gray-600">Safety Score: {airline.score}%</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    {airline.change > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    <span className={`text-sm font-medium ${airline.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {Math.abs(airline.change)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aircraft Safety */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Aircraft Type Safety</h3>
            <Target className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {aircraftTypes.map((aircraft, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{aircraft.type}</span>
                  <span className="text-sm font-medium text-gray-600">{aircraft.score}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${aircraft.score}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">{aircraft.incidents} incidents</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Safety trend chart</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Incident Categories</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Incident distribution chart</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Indicators */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Performance Indicators</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">99.8%</p>
            <p className="text-sm text-gray-600">Flight Success Rate</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">2.1s</p>
            <p className="text-sm text-gray-600">Avg Response Time</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">147</p>
            <p className="text-sm text-gray-600">Days Since Last Incident</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyMetrics;