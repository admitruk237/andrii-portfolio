import { z } from 'zod'

export const contactSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters' })
    .trim(),
  lastname: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters' })
    .trim(),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .trim(),
  phone: z
    .string()
    .min(10, { message: 'Please enter a valid phone number' })
    .regex(/^[\+]?[0-9\s\-\(\)]{10,}$/, {
      message: 'Please enter a valid phone number',
    })
    .trim(),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .trim(),
})

export type ContactFormData = z.infer<typeof contactSchema>
