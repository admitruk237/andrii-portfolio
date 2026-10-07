'use client'

import { useTranslations } from 'next-intl'
import { ROUTES } from '@/constants'
import { Link, usePathname } from '@/i18n/routing'
import { cn, isActiveRoute } from '@/lib/utils'

export const Nav = () => {
  const pathname = usePathname()
  const t = useTranslations('Nav')

  return (
    <nav className="flex gap-8">
      {ROUTES.map(({ labelKey, path }) => {
        const isCurrent = isActiveRoute(pathname, path)

        return (
          <Link
            href={path}
            key={path}
            aria-current={isCurrent ? 'page' : undefined}
            className={cn(
              'capitalize font-medium hover:text-accent transition-all',
              isCurrent && 'text-accent border-b-2 border-accent',
            )}
          >
            {t(labelKey)}
          </Link>
        )
      })}
    </nav>
  )
}
