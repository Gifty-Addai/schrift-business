// ========================================
// SCHRIFT - TypeScript Type Definitions
// ========================================

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Technology {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

export interface Stat {
  id: string;
  value: number;
  label: string;
  suffix?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}
