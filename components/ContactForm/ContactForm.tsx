'use client'

import { useContactForm } from '@/hooks'
import { type ContactFormData } from '@/lib/validation/contactSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button, Input, Textarea, LoadingDots } from '../ui'
import { useTranslations } from 'next-intl'
import { z } from 'zod'

export const ContactForm = () => {
  const t = useTranslations('Contact')
  const { isSubmitting, submitForm } = useContactForm()

  const dynamicSchema = z.object({
    firstname: z
      .string()
      .min(2, { message: t('errors.firstname') })
      .trim(),
    lastname: z
      .string()
      .min(2, { message: t('errors.lastname') })
      .trim(),
    email: z
      .string()
      .email({ message: t('errors.email') })
      .trim(),
    phone: z
      .string()
      .min(10, { message: t('errors.phone') })
      .regex(/^[\+]?[0-9\s\-\(\)]{10,}$/, {
        message: t('errors.phone'),
      })
      .trim(),
    message: z
      .string()
      .min(10, { message: t('errors.message') })
      .trim(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(dynamicSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitForm(data)
      reset()
    } catch (error) {}
  }

  return (
    <div className="lg:w-[54%] order-2 lg:order-none">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 p-2 sm:p-10 bg-card rounded-xl"
      >
        <h3 className="text-4xl text-accent">{t('title')}</h3>
        <p className="text-muted-foreground">{t('description')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder={t('firstname')}
              {...register('firstname')}
              className={errors.firstname ? 'border-red-500' : ''}
            />
            {errors.firstname && (
              <span className="text-red-500 text-sm px-1">
                {errors.firstname.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder={t('lastname')}
              {...register('lastname')}
              className={errors.lastname ? 'border-red-500' : ''}
            />
            {errors.lastname && (
              <span className="text-red-500 text-sm px-1">
                {errors.lastname.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder={t('email')}
              {...register('email')}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <span className="text-red-500 text-sm px-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Input
              type="tel"
              placeholder={t('phone')}
              {...register('phone')}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm px-1">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Textarea
            placeholder={t('message')}
            {...register('message')}
            className={errors.message ? 'border-red-500' : ''}
          />
          {errors.message && (
            <span className="text-red-500 text-sm px-1">
              {errors.message.message}
            </span>
          )}
        </div>

        <Button
          variant="default"
          size="md"
          className="max-w-40"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? <LoadingDots /> : t('send')}
        </Button>
      </form>
    </div>
  )
}
