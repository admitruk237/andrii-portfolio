'use client'

import { useLocale } from 'next-intl'
import { routing, usePathname, useRouter } from '@/i18n/routing'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known locales are passed to `next-intl`
        { pathname, params },
        { locale: nextLocale },
      )
    })
  }

  return (
    <Select
      defaultValue={locale}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-[70px] bg-card border-none focus:ring-0 focus:ring-offset-0 text-foreground uppercase font-medium">
        <SelectValue placeholder={locale.toUpperCase()} />
      </SelectTrigger>
      <SelectContent className="bg-primary border-accent/20">
        {routing.locales.map((l) => (
          <SelectItem
            key={l}
            value={l}
            className="capitalize focus:bg-accent focus:text-primary cursor-pointer hover:bg-accent/10"
          >
            {l === 'ua' ? 'UA' : l === 'en' ? 'EN' : 'PL'}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
