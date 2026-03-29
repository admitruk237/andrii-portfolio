'use client'
import { Link, usePathname } from '@/i18n/routing'
import { navLinks } from '@/constants/navLinks'
import { useTranslations } from 'next-intl'

export const Nav = () => {
  const pathname = usePathname()
  const t = useTranslations('Nav')

  return (
    <nav className="flex gap-8">
      {navLinks.map((link, index) => {
        const isCurrent = pathname === link.path || pathname === `/${link.path}`
        return (
          <Link
            href={link.path}
            key={index}
            className={`${isCurrent && 'text-accent border-b-2 border-accent'}
          capitalize font-medium hover:text-accent transition-all`}
          >
            {t(link.name)}
          </Link>
        )
      })}
    </nav>
  )
}
