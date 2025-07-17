import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Shield, 
  Activity,
  Plane,
  Users,
  MapPin,
  Clock,
  BarChart3
} from 'lucide-react';
import StatCard from '../Common/StatCard';
import ChartCard from '../Common/ChartCard';
import RecentIncidents from '../Dashboard/RecentIncidents';
import RiskAlerts from '../Dashboard/RiskAlerts';
import SafetyScoreboard from '../Dashboard/SafetyScoreboard';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Incidents',
      value: '2,847',
      change: -12.3,
      period: 'vs last month',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      title: 'Active Flights',
      value: '45,892',
      change: 8.7,
      period: 'vs yesterday',
      icon: Plane,
      color: 'blue'
    },
    {
      title: 'Safety Score',
      value: '94.2%',
      change: 2.1,
      period: 'vs last quarter',
      icon: Shield,
      color: 'green'
    },
    {
      title: 'High Risk Routes',
      value: '17',
      change: -5.8,
      period: 'vs last week',
      icon: Activity,
      color: 'orange'
    }
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Incidents',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4
      },
      {
        label: 'Near Misses',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        tension: 0.4
      }
    ]
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Air-India Crashes Safety Dashboard</h1>
        <p className="text-gray-600 mt-2">Real-time monitoring and analysis of aviation safety data</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts */}
        <div className="lg:col-span-2 space-y-6">
          <ChartCard
            title="Incident Trends"
            subtitle="Monthly incident and near-miss analysis"
            chartData={chartData}
            type="line"
          />
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Global Risk Heatmap</h3>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Live Data</span>
              </div>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-600">Interactive risk heatmap</p>
                <p className="text-sm text-gray-500">Global flight risk visualization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <RiskAlerts />
          <RecentIncidents />
          <SafetyScoreboard />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Flight Operations</h3>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Departures Today</span>
              <span className="font-semibold text-gray-900">23,547</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Arrivals Today</span>
              <span className="font-semibold text-gray-900">23,892</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Delays ({'>'}30min)</span>
              <span className="font-semibold text-red-600">1,247</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">ML Predictions</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm text-gray-600">Low Risk Flights</span>
              <span className="font-semibold text-green-600">89.3%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm text-gray-600">Medium Risk</span>
              <span className="font-semibold text-yellow-600">8.9%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-sm text-gray-600">High Risk</span>
              <span className="font-semibold text-red-600">1.8%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;