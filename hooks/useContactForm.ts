'use client'

import { EMAIL_CONFIG } from '@/config/email'
import type { ContactFormData } from '@/lib/validation/contactSchema'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { toast } from 'sonner'

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const submitForm = async (data: ContactFormData): Promise<void> => {
    setIsSubmitting(true)

    try {
      const templateParams = {
        from_name: `${data.firstname} ${data.lastname}`,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
        current_date: new Date().toLocaleDateString(),
        current_time: new Date().toLocaleTimeString(),
      }

      await emailjs.send(
        EMAIL_CONFIG.serviceID,
        EMAIL_CONFIG.templateID,
        templateParams,
        EMAIL_CONFIG.userID,
      )

      toast.success("Message sent successfully! I'll get back to you soon.")
    } catch (error) {
      console.error('EmailJS error:', error)
      const errorMessage =
        error instanceof Error
          ? error.message
          : (error as any)?.text || 'Unknown error'
      toast.error(`Failed to send message: ${errorMessage}`)
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    isSubmitting,
    submitForm,
  }
}
