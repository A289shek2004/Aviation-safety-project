import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Pages/Dashboard';
import CrashAnalysis from './components/Pages/CrashAnalysis';
import RiskPrediction from './components/Pages/RiskPrediction';
import SafetyMetrics from './components/Pages/SafetyMetrics';
import Reports from './components/Pages/Reports';
import DataManagement from './components/Pages/DataManagement';
import UserManagement from './components/Pages/UserManagement';
import Settings from './components/Pages/Settings';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <AuthProvider>
      <Router>
        <div className="flex h-screen bg-gray-50">
          <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
            <main className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/crash-analysis" element={<CrashAnalysis />} />
                <Route path="/risk-prediction" element={<RiskPrediction />} />
                <Route path="/safety-metrics" element={<SafetyMetrics />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/data-management" element={<DataManagement />} />
                <Route path="/user-management" element={<UserManagement />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;