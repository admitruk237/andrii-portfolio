import { z } from 'zod'

const NAME_MIN_LENGTH = 2
const PHONE_MIN_LENGTH = 10
const MESSAGE_MIN_LENGTH = 10
const PHONE_PATTERN = /^[+]?[0-9\s\-()]{10,}$/

export type ContactErrorMessages = Record<
  'firstname' | 'lastname' | 'email' | 'phone' | 'message',
  string
>

export const createContactSchema = (messages: ContactErrorMessages) =>
  z.object({
    firstname: z
      .string()
      .trim()
      .min(NAME_MIN_LENGTH, { message: messages.firstname }),
    lastname: z
      .string()
      .trim()
      .min(NAME_MIN_LENGTH, { message: messages.lastname }),
    email: z.string().trim().email({ message: messages.email }),
    phone: z
      .string()
      .trim()
      .min(PHONE_MIN_LENGTH, { message: messages.phone })
      .regex(PHONE_PATTERN, { message: messages.phone }),
    message: z
      .string()
      .trim()
      .min(MESSAGE_MIN_LENGTH, { message: messages.message }),
  })

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>

export type ContactField = keyof ContactFormData
