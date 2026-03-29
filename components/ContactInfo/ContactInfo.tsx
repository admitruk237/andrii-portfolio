import { useContactAction } from '@/hooks'
import { info } from '@/constants/info'
import { useTranslations } from 'next-intl'

const TITLE_KEY_MAP: Record<string, string> = {
  Phone: 'phone_label',
  Email: 'email_label',
  Location: 'location_label',
}

export const ContactInfo = () => {
  const t = useTranslations('Contact')
  const { isMobile, handleContactAction } = useContactAction()

  return (
    <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
      <ul className="flex flex-col gap-10">
        {info.map((item, index) => {
          const translationKey = TITLE_KEY_MAP[item.title] || item.title

          return (
            <li
              className="flex items-center gap-6"
              key={index}
            >
              <div
                className="group relative w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] flex items-center justify-center rounded-md bg-card text-accent cursor-pointer"
                onClick={() => handleContactAction(item)}
              >
                <div className="text-[28px]">{item.icon}</div>
                {!isMobile && (
                  <span className="absolute -bottom-8 bg-card text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    {t('copy')}
                  </span>
                )}
              </div>
              <div>
                <p className="text-muted-foreground">{t(translationKey)}</p>
                <h3 className="text-xl">{item.description}</h3>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
