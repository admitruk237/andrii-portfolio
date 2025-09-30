export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

export interface Skill {
  skillName: string;
  percentage: number;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface SocialLink {
  icon: React.ComponentType;
  path: string;
}

export type ContactItem = {
  icon: React.ReactElement;
  title: string;
  description: string;
  type: 'phone' | 'email' | 'location';
};

export interface Stats {
  num: number;
  text: string;
}

export interface SocialProps {
  containerSyles?: string;
  iconStyles?: string;
}

export interface FormFieldProps {
  name: string;
  placeholder: string;
  type?: string;
  component?: 'input' | 'textarea' | 'select';
  options?: string[];
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

export interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
}

export interface UseContactFormReturn {
  formData: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  handleInputChange: (field: keyof ContactFormData, value: string) => void;
  submitForm: () => Promise<void>;
}

export interface UseDownloadCVReturn {
  downloadState: 'idle' | 'loading' | 'success' | 'error';
  progress: number;
  handleDownloadCV: () => void;
}

export interface StairAnimation {
  initial: { top: string };
  animate: { top: string };
  exit: { top: string };
}

export type DownloadState = 'idle' | 'loading' | 'success' | 'error';
