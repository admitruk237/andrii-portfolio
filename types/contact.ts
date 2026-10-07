import type { Messages } from 'next-intl'
import type { IconType } from 'react-icons'

export type ContactType = keyof Messages['Contact']['labels']

export type ContactItem = {
  type: ContactType
  icon: IconType
  value: string
}
