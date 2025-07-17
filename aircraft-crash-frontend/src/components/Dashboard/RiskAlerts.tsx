import React from 'react';
import { AlertTriangle, Bell, Clock } from 'lucide-react';

const RiskAlerts: React.FC = () => {
  const alerts = [
    {
      id: 1,
      title: 'Weather Alert',
      message: 'Severe turbulence expected on route AA-1234',
      time: '10 min ago',
      priority: 'High',
      type: 'weather'
    },
    {
      id: 2,
      title: 'Maintenance Due',
      message: 'Aircraft N12345 requires inspection',
      time: '1 hour ago',
      priority: 'Medium',
      type: 'maintenance'
    },
    {
      id: 3,
      title: 'Route Risk',
      message: 'Increased bird activity at runway 24L',
      time: '2 hours ago',
      priority: 'Low',
      type: 'operational'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600 bg-red-100 border-red-200';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'Low':
        return 'text-green-600 bg-green-100 border-green-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Risk Alerts</h3>
        <Bell className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className={`p-4 rounded-lg border ${getPriorityColor(alert.priority)}`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="font-medium text-sm">{alert.title}</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{alert.message}</p>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{alert.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium">
        View All Alerts
      </button>
    </div>
  );
};

export default RiskAlerts;