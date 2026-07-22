export type Language = 'ar' | 'en';

export type LocalizedString = Record<Language, string>;

export interface SEO {
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  keywords?: LocalizedString;
  ogImage?: string;
  canonicalUrl?: string;
}

export interface ImageAsset {
  url: string;
  alt: LocalizedString;
  caption?: LocalizedString;
}

export interface Service {
  id: string;
  slug: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
  heroImage?: string;
  gallery?: ImageAsset[];
  faqs?: FAQ[];
  relatedProjectIds?: string[];
  seo?: SEO;
  internalLinks?: { label: LocalizedString; url: string }[];
}

export interface Project {
  id: string;
  slug: string;
  status: 'planning' | 'in-progress' | 'completed';
  title: LocalizedString;
  type: LocalizedString;
  categoryId: string;
  location?: LocalizedString;
  city?: LocalizedString;
  district?: LocalizedString;
  coordinates?: { lat: number; lng: number };
  client?: LocalizedString;
  brand?: string;
  image: string; // Cover image
  heroImage?: string;
  gallery?: string[];
  beforeImages?: string[];
  constructionImages?: string[];
  afterImages?: string[];
  completionDate?: string; // ISO date or year
  shortDescription: LocalizedString;
  description?: LocalizedString;
  scopeOfWork?: LocalizedString[];
  serviceIds?: string[];
  relatedProjectIds?: string[];
  seo?: SEO;
  isFeatured?: boolean;
  videoUrl?: string;
  documents?: { title: LocalizedString; url: string }[];
}

export interface ProcessStep {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
}

export interface Stat {
  id: string;
  label: LocalizedString;
  value?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: LocalizedString;
}

export interface Partner {
  id: string;
  name: LocalizedString;
  logo: string;
  website?: string;
}

export interface FAQ {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
}

export interface CareerOpportunity {
  id: string;
  title: LocalizedString;
  department: LocalizedString;
  location: LocalizedString;
  type: 'full-time' | 'part-time' | 'contract';
  description: LocalizedString;
  requirements: LocalizedString[];
  isActive: boolean;
}

export interface CompanyInfo {
  name: LocalizedString;
  about: LocalizedString;
  vision: LocalizedString;
  mission: LocalizedString;
  emails: { general: string; support?: string; careers?: string };
  phones: string[];
  locations: { city: LocalizedString; address: LocalizedString; coordinates?: { lat: number; lng: number } }[];
  socialLinks: { platform: string; url: string }[];
}
