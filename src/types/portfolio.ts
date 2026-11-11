export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Mixed-Use' | 'Industrial & Trade' | 'Commercial' | 'Civic Infrastructure';
  status: 'Completed' | 'Phase II Under Construction' | 'Signature Commission' | 'Public-Private Partnership';
  year: string;
  location: string;
  area: string;
  value: string;
  imageSrc: string;
  fallbackImage: string;
  architecturalOverview: string;
  structuralEngineering: string;
  esgRating: string;
  sustainabilityHighlights: string[];
  keyPartners: string[];
  specifications: {
    grossFloorArea: string;
    structuralGrid: string;
    facadeSystem: string;
    leadArchitect: string;
    deliveryMethod: string;
    certifications: string;
  };
}

export interface CapabilityItem {
  number: string;
  title: string;
  summary: string;
  disciplines: string[];
  methodology: string;
  activePortfolioMetric: string;
  representativeWorks: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  description: string;
  breakdown: { label: string; value: string }[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  organization: string;
  projectScope: string;
  budgetTier: string;
  location: string;
  message: string;
}
