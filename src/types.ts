export interface TrainingArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  metrics: string;
  focus: string;
}

export interface MethodStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface FacilitySpace {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  techEquipments: string;
  areaSize: string;
  image?: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  image: string;
  specialtyTag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  goal: string;
  timeframe: string;
  quote: string;
  metricsResult: string;
}

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  isFeatured?: boolean;
  idealFor: string;
  features: string[];
  assessmentFrequency: string;
}

export interface AssessmentFormValues {
  name: string;
  phone: string;
  email: string;
  goal: string;
  experience: string;
  preferredTime: string;
  notes?: string;
}
