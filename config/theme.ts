const SECONDS_PER_YEAR = 60 * 60 * 24 * 365

export const THEME_COOKIE = {
  name: 'theme',
  maxAgeSeconds: SECONDS_PER_YEAR,
} as const

export const DEFAULT_THEME = 'dark'
