import type { Messages } from 'next-intl'
import type { IconType } from 'react-icons'

export type NavLabelKey = keyof Messages['Nav']

export type NavLink = {
  labelKey: NavLabelKey
  path: string
}

export type SocialLink = {
  name: string
  icon: IconType
  href: string
}
