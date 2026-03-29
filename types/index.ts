export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export interface ContactFormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

export interface Skill {
  skillName: string
  percentage: number
}

export interface Experience {
  company: string
  position: string
  duration: string
}

export interface Education {
  institution: string
  degree: string
  duration: string
}

export interface NavLink {
  name: string
  path: string
}

export interface SocialLink {
  icon: React.ComponentType
  path: string
}

export type ContactItem = {
  icon: React.ReactElement
  title: string
  description: string
  type: 'phone' | 'email' | 'location'
}

export interface Stats {
  num: number
  text: string
}

export interface SocialProps {
  containerStyles?: string
  iconStyles?: string
}

export interface CircularProgressProps {
  progress: number
  size?: number
  strokeWidth?: number
}

export interface UseContactFormReturn {
  formData: ContactFormData
  errors: ContactFormErrors
  isSubmitting: boolean
  handleInputChange: (field: keyof ContactFormData, value: string) => void
  submitForm: () => Promise<void>
}

export interface UseDownloadCVReturn {
  downloadState: 'idle' | 'loading' | 'success' | 'error'
  progress: number
  handleDownloadCV: () => void
}

export interface StairAnimation {
  initial: { top: string }
  animate: { top: string }
  exit: { top: string }
}

export type DownloadState = 'idle' | 'loading' | 'success' | 'error'

export interface ProjectStackItem {
  name: string
}

export interface Project {
  num: string
  category: string
  title: string
  description: string
  stack: ProjectStackItem[]
  image?: string
  video?: string
  github: string
  live: string
}
