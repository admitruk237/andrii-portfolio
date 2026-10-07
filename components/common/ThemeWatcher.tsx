'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { THEME_COOKIE } from '@/config/theme'

export const ThemeWatcher = () => {
  const { theme } = useTheme()

  useEffect(() => {
    if (theme) {
      document.cookie = `${THEME_COOKIE.name}=${theme}; path=/; max-age=${THEME_COOKIE.maxAgeSeconds}; SameSite=Lax`
    }
  }, [theme])

  return null
}
