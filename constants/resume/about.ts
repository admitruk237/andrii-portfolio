import type { AboutInfoItem } from '@/types'
import { PROFILE } from '../profile'

export const ABOUT_INFO: AboutInfoItem[] = [
  { kind: 'text', labelKey: 'name', value: PROFILE.fullName },
  { kind: 'text', labelKey: 'phone', value: PROFILE.phone },
  { kind: 'text', labelKey: 'email', value: PROFILE.email },
  { kind: 'translated', labelKey: 'location' },
  { kind: 'translated', labelKey: 'nationality' },
  { kind: 'translated', labelKey: 'languages' },
  {
    kind: 'link',
    labelKey: 'github',
    text: PROFILE.githubUsername,
    href: PROFILE.githubUrl,
  },
  {
    kind: 'link',
    labelKey: 'linkedin',
    text: PROFILE.linkedinUsername,
    href: PROFILE.linkedinUrl,
  },
]
