import React from 'react';
import { BarChart3 } from 'lucide-react';

interface ChartCardProps {
  title: string;
  subtitle: string;
  chartData: any;
  type: 'line' | 'bar';
}

const ChartCard: React.FC<ChartCardProps> = ({ title, subtitle, chartData, type }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        <BarChart3 className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <BarChart3 className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-gray-600">Interactive {type} chart</p>
          <p className="text-sm text-gray-500">Chart.js or D3.js integration</p>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;