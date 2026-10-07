'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo, type HTMLInputTypeAttribute } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { useContactForm } from '@/hooks'
import {
  createContactSchema,
  type ContactField,
  type ContactFormData,
} from '@/lib/validation/contactSchema'
import { cn } from '@/lib/utils'
import { Button, Input, LoadingDots, Textarea } from '../ui'

const EMPTY_FORM: ContactFormData = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  message: '',
}

const INPUT_FIELDS: { name: ContactField; type: HTMLInputTypeAttribute }[] = [
  { name: 'firstname', type: 'text' },
  { name: 'lastname', type: 'text' },
  { name: 'email', type: 'email' },
  { name: 'phone', type: 'tel' },
]

const FieldError = ({ message }: { message?: string }) =>
  message ? (
    <span className="text-destructive text-sm px-1">{message}</span>
  ) : null

export const ContactForm = () => {
  const t = useTranslations('Contact')
  const { isSubmitting, submitForm } = useContactForm()

  const schema = useMemo(
    () =>
      createContactSchema({
        firstname: t('errors.firstname'),
        lastname: t('errors.lastname'),
        email: t('errors.email'),
        phone: t('errors.phone'),
        message: t('errors.message'),
      }),
    [t],
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: EMPTY_FORM,
  })

  const onSubmit = async (data: ContactFormData) => {
    const isSent = await submitForm(data)
    if (isSent) reset()
  }

  return (
    <div className="lg:w-[54%] order-2 lg:order-none">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 p-6 sm:p-10 bg-card rounded-xl"
      >
        <h3 className="text-2xl md:text-4xl text-accent">{t('title')}</h3>
        <p className="text-muted-foreground">{t('description')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INPUT_FIELDS.map(({ name, type }) => (
            <div
              key={name}
              className="flex flex-col gap-2"
            >
              <Input
                type={type}
                placeholder={t(name)}
                aria-invalid={Boolean(errors[name])}
                {...register(name)}
                className={cn(errors[name] && 'border-destructive')}
              />
              <FieldError message={errors[name]?.message} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Textarea
            placeholder={t('message')}
            aria-invalid={Boolean(errors.message)}
            {...register('message')}
            className={cn(errors.message && 'border-destructive')}
          />
          <FieldError message={errors.message?.message} />
        </div>

        <Button
          variant="default"
          size="md"
          className="w-full sm:w-auto sm:min-w-40"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? <LoadingDots label={t('sending')} /> : t('send')}
        </Button>
      </form>
    </div>
  )
}
