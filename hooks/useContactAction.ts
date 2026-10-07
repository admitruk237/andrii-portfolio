'use client'

import { useCallback, useSyncExternalStore } from 'react'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { MAPS_SEARCH_URL, MOBILE_MEDIA_QUERY } from '@/constants'
import type { ContactItem, ContactType } from '@/types'

type UseContactActionReturn = {
  isMobile: boolean
  handleContactAction: (item: ContactItem) => void
}

const subscribeToViewport = (onChange: () => void) => {
  const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY)
  mediaQuery.addEventListener('change', onChange)
  return () => mediaQuery.removeEventListener('change', onChange)
}

const getIsMobile = () => window.matchMedia(MOBILE_MEDIA_QUERY).matches

const getIsMobileOnServer = () => false

const NATIVE_ACTIONS: Record<ContactType, (value: string) => void> = {
  phone: (value) => {
    window.location.href = `tel:${value}`
  },
  email: (value) => {
    window.location.href = `mailto:${value}`
  },
  location: (value) => {
    window.open(`${MAPS_SEARCH_URL}${encodeURIComponent(value)}`, '_blank')
  },
}

export const useContactAction = (): UseContactActionReturn => {
  const t = useTranslations('Contact')
  const isMobile = useSyncExternalStore(
    subscribeToViewport,
    getIsMobile,
    getIsMobileOnServer,
  )

  const handleContactAction = useCallback(
    ({ type, value }: ContactItem): void => {
      if (isMobile) {
        NATIVE_ACTIONS[type](value)
        return
      }

      navigator.clipboard.writeText(value)
      toast.success(t('copied'))
    },
    [isMobile, t],
  )

  return { isMobile, handleContactAction }
}
