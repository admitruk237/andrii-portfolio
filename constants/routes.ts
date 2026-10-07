import type { NavLink } from '@/types'

export const HOME_PATH = '/'

export const CONTACT_PATH = '/contact'

export const ROUTES: NavLink[] = [
  { labelKey: 'home', path: HOME_PATH },
  { labelKey: 'resume', path: '/resume' },
  { labelKey: 'work', path: '/work' },
  { labelKey: 'contact', path: CONTACT_PATH },
]
