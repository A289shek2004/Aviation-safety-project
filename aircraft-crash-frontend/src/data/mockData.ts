import { CrashIncident, RiskAssessment, SafetyMetrics, Airline, Aircraft } from '../types';

export const mockIncidents: CrashIncident[] = [
  {
    id: '1',
    date: '2024-01-15',
    location: 'Denver, CO',
    airline: 'SkyWings Airlines',
    aircraft: 'Boeing 737-800',
    casualties: 0,
    severity: 'low',
    cause: 'Bird Strike',
    weather: 'Clear',
    phase: 'Takeoff',
    coordinates: [-104.9903, 39.7392]
  },
  {
    id: '2',
    date: '2024-01-08',
    location: 'Miami, FL',
    airline: 'Global Air',
    aircraft: 'Airbus A320',
    casualties: 12,
    severity: 'high',
    cause: 'Severe Weather',
    weather: 'Thunderstorm',
    phase: 'Landing',
    coordinates: [-80.1918, 25.7617]
  },
  {
    id: '3',
    date: '2024-01-03',
    location: 'Chicago, IL',
    airline: 'Continental Express',
    aircraft: 'Embraer E175',
    casualties: 0,
    severity: 'medium',
    cause: 'Technical Malfunction',
    weather: 'Foggy',
    phase: 'Cruise',
    coordinates: [-87.6298, 41.8781]
  }
];

export const mockRiskAssessments: RiskAssessment[] = [
  {
    id: '1',
    aircraft: 'Boeing 737-800',
    airline: 'SkyWings Airlines',
    route: 'LAX → JFK',
    riskScore: 75,
    factors: [
      { name: 'Weather Conditions', impact: 0.3, probability: 0.6, category: 'weather' },
      { name: 'Aircraft Age', impact: 0.2, probability: 0.4, category: 'mechanical' },
      { name: 'Pilot Experience', impact: 0.1, probability: 0.2, category: 'human' }
    ],
    recommendations: [
      'Monitor weather conditions closely',
      'Schedule additional maintenance check',
      'Ensure senior pilot assignment'
    ],
    lastUpdated: '2024-01-20'
  },
  {
    id: '2',
    aircraft: 'Airbus A320',
    airline: 'Global Air',
    route: 'ORD → DEN',
    riskScore: 45,
    factors: [
      { name: 'Route Complexity', impact: 0.2, probability: 0.3, category: 'operational' },
      { name: 'Maintenance History', impact: 0.15, probability: 0.25, category: 'mechanical' }
    ],
    recommendations: [
      'Standard operating procedures',
      'Regular maintenance schedule'
    ],
    lastUpdated: '2024-01-20'
  }
];

export const mockSafetyMetrics: SafetyMetrics = {
  totalFlights: 1250000,
  incidents: 23,
  safetyScore: 96.8,
  improvementRate: 12.5,
  highRiskRoutes: 8,
  preventedIncidents: 15
};

export const mockAirlines: Airline[] = [
  {
    id: '1',
    name: 'SkyWings Airlines',
    code: 'SW',
    safetyRating: 4.2,
    fleetSize: 150,
    incidentRate: 0.02,
    country: 'USA'
  },
  {
    id: '2',
    name: 'Global Air',
    code: 'GA',
    safetyRating: 4.8,
    fleetSize: 220,
    incidentRate: 0.008,
    country: 'USA'
  },
  {
    id: '3',
    name: 'Continental Express',
    code: 'CE',
    safetyRating: 4.5,
    fleetSize: 95,
    incidentRate: 0.015,
    country: 'USA'
  }
];

export const mockAircraft: Aircraft[] = [
  {
    id: '1',
    model: 'Boeing 737-800',
    manufacturer: 'Boeing',
    safetyRating: 4.3,
    totalHours: 45000,
    incidentCount: 2,
    lastMaintenance: '2024-01-15'
  },
  {
    id: '2',
    model: 'Airbus A320',
    manufacturer: 'Airbus',
    safetyRating: 4.7,
    totalHours: 38000,
    incidentCount: 1,
    lastMaintenance: '2024-01-18'
  },
  {
    id: '3',
    model: 'Embraer E175',
    manufacturer: 'Embraer',
    safetyRating: 4.1,
    totalHours: 28000,
    incidentCount: 3,
    lastMaintenance: '2024-01-12'
  }
];