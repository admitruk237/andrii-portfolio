'use client'

import { useState } from 'react'
import { Link, usePathname } from '@/i18n/routing'
import { CiMenuFries } from 'react-icons/ci'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { ROUTES } from '@/constants/routes'

export const MobileNav = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const tNav = useTranslations('Nav')
  const tHeader = useTranslations('Header')

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mt-32  text-center text-2xl">
            <Link
              href="/"
              onClick={() => setOpen(false)}
            >
              <h1 className="text-4xl mb-20 text-foreground font-semibold">
                {tHeader('name')}
                <span className="text-accent-hover">.</span>
              </h1>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col justify-center items-center gap-8">
          {ROUTES.map((link, index) => {
            const isCurrent =
              pathname === link.path || pathname === `/${link.path}`

            return (
              <Link
                href={link.path}
                key={index}
                onClick={() => setOpen(false)}
                aria-current={isCurrent ? 'page' : undefined}
                className={clsx(
                  'text-xl capitalize hover:text-accent transition-all',
                  isCurrent && 'text-accent border-b-2 border-accent',
                )}
              >
                {tNav(link.name)}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
