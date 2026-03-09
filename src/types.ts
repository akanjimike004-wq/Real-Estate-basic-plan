export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'house' | 'apartment' | 'condo' | 'land' | 'commercial';
  status: 'available' | 'sold' | 'rented';
  bedrooms: number;
  bathrooms: number;
  size_sqft: number;
  images: string[];
  agent_id: string;
  created_at: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  created_at: string;
}

export interface Lead {
  id: string;
  property_id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

export interface CompanySettings {
  id: string;
  name: string;
  logo: string;
  email: string;
  phone: string;
  address: string;
}
