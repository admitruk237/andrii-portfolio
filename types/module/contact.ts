import { ReactElement } from 'react'

export type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export type ContactFormErrors = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

export type ContactItem = {
  icon: ReactElement
  title: string
  description: string
  type: 'phone' | 'email' | 'location'
}
