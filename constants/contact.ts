import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import type { ContactItem } from '@/types'
import { PROFILE } from './profile'

export const CONTACT_ITEMS: ContactItem[] = [
  { type: 'phone', icon: FaPhoneAlt, value: PROFILE.phone },
  { type: 'email', icon: FaEnvelope, value: PROFILE.email },
  { type: 'location', icon: FaMapMarkerAlt, value: PROFILE.address },
]

export const MAPS_SEARCH_URL = 'https://www.google.com/maps/search/?api=1&query='

export const MOBILE_MEDIA_QUERY = '(max-width: 767px)'
