export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | 'Present';
  description?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'databases' | 'other';
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    bio: string;
    imageUrl?: string;
  };
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  contact: ContactInfo;
}

