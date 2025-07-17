import React, { useState } from 'react';
import { 
  Upload, 
  Database, 
  FileText, 
  Download, 
  Trash2,
  Eye,
  Edit,
  Plus,
  Search,
  Filter,
  RefreshCw
} from 'lucide-react';

const DataManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upload');

  const datasets = [
    {
      id: 1,
      name: 'Flight Operations 2024',
      type: 'Operations',
      size: '45.2 MB',
      records: 125420,
      lastUpdated: '2024-01-15',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Incident Database',
      type: 'Incidents',
      size: '12.8 MB',
      records: 3847,
      lastUpdated: '2024-01-14',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Weather Data Archive',
      type: 'Weather',
      size: '234.7 MB',
      records: 892341,
      lastUpdated: '2024-01-13',
      status: 'Processing'
    },
    {
      id: 4,
      name: 'Aircraft Maintenance',
      type: 'Maintenance',
      size: '28.9 MB',
      records: 67234,
      lastUpdated: '2024-01-12',
      status: 'Active'
    }
  ];

  const recentUploads = [
    {
      filename: 'january_incidents.csv',
      size: '2.4 MB',
      uploaded: '2 hours ago',
      status: 'Processed'
    },
    {
      filename: 'maintenance_log_q4.xlsx',
      size: '5.1 MB',
      uploaded: '4 hours ago',
      status: 'Processing'
    },
    {
      filename: 'weather_data_2024.json',
      size: '12.8 MB',
      uploaded: '1 day ago',
      status: 'Processed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-600 bg-green-100';
      case 'Processing':
        return 'text-yellow-600 bg-yellow-100';
      case 'Error':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Data Management</h1>
          <p className="text-gray-600 mt-2">Upload, manage, and analyze aviation data</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Upload className="w-4 h-4" />
            <span>Upload Data</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'upload', label: 'Upload', icon: Upload },
              { id: 'datasets', label: 'Datasets', icon: Database },
              { id: 'quality', label: 'Data Quality', icon: FileText }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'upload' && (
            <div className="space-y-6">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                <div className="text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Aviation Data</h3>
                  <p className="text-gray-600 mb-4">
                    Drag and drop your files here, or click to browse
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Choose Files
                  </button>
                  <p className="text-sm text-gray-500 mt-2">
                    Supported formats: CSV, Excel, JSON, XML (Max 100MB)
                  </p>
                </div>
              </div>

              {/* Upload Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Data Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Flight Operations</option>
                    <option>Incident Reports</option>
                    <option>Weather Data</option>
                    <option>Maintenance Records</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Source</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Internal System</option>
                    <option>External API</option>
                    <option>Manual Upload</option>
                    <option>Automated Feed</option>
                  </select>
                </div>
              </div>

              {/* Recent Uploads */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Recent Uploads</h4>
                <div className="space-y-3">
                  {recentUploads.map((upload, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900">{upload.filename}</p>
                          <p className="text-sm text-gray-600">{upload.size} • {upload.uploaded}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(upload.status)}`}>
                          {upload.status}
                        </span>
                        <button className="text-blue-600 hover:text-blue-800">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'datasets' && (
            <div className="space-y-6">
              {/* Search and Filter */}
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search datasets..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <RefreshCw className="w-4 h-4" />
                  <span>Refresh</span>
                </button>
              </div>

              {/* Datasets Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dataset</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Records</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {datasets.map((dataset) => (
                      <tr key={dataset.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Database className="w-5 h-5 text-gray-400 mr-3" />
                            <span className="text-sm font-medium text-gray-900">{dataset.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dataset.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dataset.size}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dataset.records.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dataset.lastUpdated}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(dataset.status)}`}>
                            {dataset.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-800">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'quality' && (
            <div className="space-y-6">
              {/* Data Quality Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-800">Data Quality Score</p>
                      <p className="text-2xl font-bold text-green-900">94.2%</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Database className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Issues Found</p>
                      <p className="text-2xl font-bold text-yellow-900">127</p>
                    </div>
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <FileText className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-800">Validation Rate</p>
                      <p className="text-2xl font-bold text-blue-900">98.7%</p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Plus className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Issues */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Data Quality Issues</h4>
                <div className="space-y-3">
                  {[
                    { type: 'Missing Values', count: 45, severity: 'Medium' },
                    { type: 'Duplicate Records', count: 23, severity: 'Low' },
                    { type: 'Format Inconsistency', count: 59, severity: 'High' }
                  ].map((issue, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{issue.type}</p>
                        <p className="text-sm text-gray-600">{issue.count} instances found</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          issue.severity === 'High' ? 'text-red-600 bg-red-100' :
                          issue.severity === 'Medium' ? 'text-yellow-600 bg-yellow-100' :
                          'text-green-600 bg-green-100'
                        }`}>
                          {issue.severity}
                        </span>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Fix
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataManagement;