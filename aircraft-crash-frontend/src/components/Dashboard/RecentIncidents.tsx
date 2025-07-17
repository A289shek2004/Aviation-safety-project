import React from 'react';
import { AlertTriangle, Clock, MapPin } from 'lucide-react';

const RecentIncidents: React.FC = () => {
  const incidents = [
    {
      id: 1,
      type: 'Near Miss',
      location: 'LAX Airport',
      time: '2 hours ago',
      severity: 'Medium',
      aircraft: 'Boeing 737'
    },
    {
      id: 2,
      type: 'Bird Strike',
      location: 'JFK Airport',
      time: '4 hours ago',
      severity: 'Low',
      aircraft: 'Airbus A320'
    },
    {
      id: 3,
      type: 'Turbulence',
      location: 'Over Atlantic',
      time: '6 hours ago',
      severity: 'High',
      aircraft: 'Boeing 777'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'text-red-600 bg-red-100';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'Low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Incidents</h3>
        <AlertTriangle className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {incidents.map((incident) => (
          <div key={incident.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-medium text-gray-900">{incident.type}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                    {incident.severity}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{incident.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{incident.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1">{incident.aircraft}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium">
        View All Incidents
      </button>
    </div>
  );
};

export default RecentIncidents;