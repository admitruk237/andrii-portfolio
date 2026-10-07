'use client'

import emailjs from '@emailjs/browser'
import { useCallback, useState } from 'react'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { EMAIL_CONFIG } from '@/config/email'
import type { ContactFormData } from '@/lib/validation/contactSchema'

type UseContactFormReturn = {
  isSubmitting: boolean
  submitForm: (data: ContactFormData) => Promise<boolean>
}

const getErrorReason = (error: unknown): string | undefined => {
  if (error instanceof Error) return error.message
  if (typeof error === 'object' && error !== null && 'text' in error) {
    return String(error.text)
  }
  return undefined
}

export const useContactForm = (): UseContactFormReturn => {
  const t = useTranslations('Contact')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = useCallback(
    async (data: ContactFormData): Promise<boolean> => {
      setIsSubmitting(true)
      const now = new Date()

      try {
        await emailjs.send(
          EMAIL_CONFIG.serviceID,
          EMAIL_CONFIG.templateID,
          {
            from_name: `${data.firstname} ${data.lastname}`,
            from_email: data.email,
            phone: data.phone,
            message: data.message,
            current_date: now.toLocaleDateString(),
            current_time: now.toLocaleTimeString(),
          },
          EMAIL_CONFIG.userID,
        )
        toast.success(t('sent'))
        return true
      } catch (error) {
        console.error('EmailJS error:', error)
        toast.error(
          t('sendFailed', { reason: getErrorReason(error) ?? t('unknownError') }),
        )
        return false
      } finally {
        setIsSubmitting(false)
      }
    },
    [t],
  )

  return { isSubmitting, submitForm }
}
