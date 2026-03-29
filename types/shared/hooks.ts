import { ContactFormData, ContactFormErrors } from '../module/contact'

export type UseContactFormReturn = {
  formData: ContactFormData
  errors: ContactFormErrors
  isSubmitting: boolean
  handleInputChange: (field: keyof ContactFormData, value: string) => void
  submitForm: () => Promise<void>
}

export type DownloadState = 'idle' | 'loading' | 'success' | 'error'

export type UseDownloadCVReturn = {
  downloadState: DownloadState
  progress: number
  handleDownloadCV: () => void
}
