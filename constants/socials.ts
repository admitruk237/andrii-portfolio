import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
} from 'react-icons/fa'
import type { SocialLink } from '@/types'
import { PROFILE } from './profile'

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', icon: FaGithub, href: PROFILE.githubUrl },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: PROFILE.linkedinUrl },
  { name: 'Facebook', icon: FaFacebook, href: PROFILE.facebookUrl },
  { name: 'Instagram', icon: FaInstagram, href: PROFILE.instagramUrl },
  { name: 'Telegram', icon: FaTelegram, href: PROFILE.telegramUrl },
]
