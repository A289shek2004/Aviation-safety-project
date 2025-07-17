export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'analyst' | 'contributor' | 'viewer';
  organization: string;
  avatar?: string;
}

export interface CrashIncident {
  id: string;
  date: string;
  location: string;
  airline: string;
  aircraft: string;
  casualties: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
  cause: string;
  weather: string;
  phase: string;
  coordinates: [number, number];
}

export interface RiskAssessment {
  id: string;
  aircraft: string;
  airline: string;
  route: string;
  riskScore: number;
  factors: RiskFactor[];
  recommendations: string[];
  lastUpdated: string;
}

export interface RiskFactor {
  name: string;
  impact: number;
  probability: number;
  category: 'weather' | 'mechanical' | 'human' | 'operational';
}

export interface SafetyMetrics {
  totalFlights: number;
  incidents: number;
  safetyScore: number;
  improvementRate: number;
  highRiskRoutes: number;
  preventedIncidents: number;
}

export interface Airline {
  id: string;
  name: string;
  code: string;
  safetyRating: number;
  fleetSize: number;
  incidentRate: number;
  country: string;
}

export interface Aircraft {
  id: string;
  model: string;
  manufacturer: string;
  safetyRating: number;
  totalHours: number;
  incidentCount: number;
  lastMaintenance: string;
}