'use client'

import { useTranslations } from 'next-intl'

export const ErrorFallback = () => {
  const t = useTranslations('Error')

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center p-8">
        <h1 className="h2 mb-4 text-accent">{t('title')}</h1>
        <p className="text-muted-foreground mb-6">{t('description')}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-hover transition-colors"
        >
          {t('refresh')}
        </button>
      </div>
    </div>
  )
}
