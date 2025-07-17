import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  AlertTriangle, 
  Brain, 
  Shield, 
  FileText, 
  Database, 
  Users, 
  Settings, 
  Plane,
  ChevronLeft,
  ChevronRight,
  Home
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const navigationItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Crash Analysis', icon: BarChart3, path: '/crash-analysis' },
    { name: 'Risk Prediction', icon: Brain, path: '/risk-prediction' },
    { name: 'Safety Metrics', icon: Shield, path: '/safety-metrics' },
    { name: 'Reports', icon: FileText, path: '/reports' },
    { name: 'Data Management', icon: Database, path: '/data-management' },
    { name: 'User Management', icon: Users, path: '/user-management' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className={`bg-slate-900 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} flex flex-col`}>
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div className={`flex items-center ${isOpen ? 'space-x-3' : 'justify-center'}`}>
            <div className="p-2 bg-blue-600 rounded-lg">
              <Plane className="w-6 h-6" />
            </div>
            {isOpen && (
              <div>
                <h1 className="text-xl font-bold">AirEasy</h1>
                <p className="text-xs text-slate-400">Aviation Intelligence</p>
              </div>
            )}
          </div>
          <button
            onClick={onToggle}
            className="p-1 hover:bg-slate-700 rounded-lg transition-colors"
          >
            {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span className="font-medium">{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Status Indicator */}
      <div className="p-4 border-t border-slate-700">
        <div className={`flex items-center ${isOpen ? 'space-x-3' : 'justify-center'}`}>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          {isOpen && (
            <div>
              <p className="text-sm font-medium">System Online</p>
              <p className="text-xs text-slate-400">All systems operational</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;