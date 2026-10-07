'use client'

import { useTranslations } from 'next-intl'
import { CONTACT_ITEMS } from '@/constants'
import { useContactAction } from '@/hooks'

export const ContactInfo = () => {
  const t = useTranslations('Contact')
  const { isMobile, handleContactAction } = useContactAction()

  return (
    <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
      <ul className="flex flex-col gap-10">
        {CONTACT_ITEMS.map((item) => {
          const { type, icon: Icon, value } = item
          const label = t(`labels.${type}`)

          return (
            <li
              key={type}
              className="flex items-center gap-6"
            >
              <button
                type="button"
                aria-label={isMobile ? label : `${t('copy')} ${label}`}
                className="group relative w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] flex items-center justify-center rounded-md bg-card text-accent cursor-pointer"
                onClick={() => handleContactAction(item)}
              >
                <Icon className="text-[28px]" />
                {!isMobile && (
                  <span className="absolute -bottom-8 bg-card text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    {t('copy')}
                  </span>
                )}
              </button>
              <div>
                <p className="text-muted-foreground">{label}</p>
                <h3 className="text-xl">{value}</h3>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
