import React from 'react';
import { TrendingUp, TrendingDown, DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  period: string;
  icon: LucideIcon;
  color: 'red' | 'blue' | 'green' | 'orange';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, period, icon: Icon, color }) => {
  const colorClasses = {
    red: 'bg-red-100 text-red-600',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600'
  };

  const isPositive = change > 0;
  const changeColor = isPositive ? 'text-green-600' : 'text-red-600';

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          <div className="flex items-center mt-2">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 mr-1 text-green-600" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1 text-red-600" />
            )}
            <span className={`text-sm font-medium ${changeColor}`}>
              {Math.abs(change)}%
            </span>
            <span className="text-sm text-gray-500 ml-1">{period}</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;