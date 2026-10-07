'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { CiMenuFries } from 'react-icons/ci'
import { ROUTES } from '@/constants'
import { Link, usePathname } from '@/i18n/routing'
import { cn, isActiveRoute } from '@/lib/utils'
import { Logo } from '../Logo/Logo'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export const MobileNav = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('Nav')
  const tHeader = useTranslations('Header')
  const close = () => setIsOpen(false)

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SheetTrigger
        aria-label={tHeader('openMenu')}
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent closeLabel={tHeader('closeMenu')}>
        <SheetHeader>
          <SheetTitle className="mt-32 text-center text-2xl">
            <Logo
              className="mb-20 text-foreground"
              onClick={close}
            />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col justify-center items-center gap-8 pb-20">
          {ROUTES.map(({ labelKey, path }) => {
            const isCurrent = isActiveRoute(pathname, path)

            return (
              <Link
                href={path}
                key={path}
                onClick={close}
                aria-current={isCurrent ? 'page' : undefined}
                className={cn(
                  'text-xl capitalize hover:text-accent transition-all',
                  isCurrent && 'text-accent border-b-2 border-accent',
                )}
              >
                {t(labelKey)}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
