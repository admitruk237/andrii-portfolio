import { about } from '@/constants'
import { useTranslations } from 'next-intl'

export const AboutMe = () => {
  const t = useTranslations('Resume.about')

  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{t('title')}</h3>
      <p className="max-w-[600px] text-muted-foreground mx-auto lg:mx-0 whitespace-pre-line">
        {t('description')}
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6  mx-auto lg:mx-0">
        {about.info.map((item, index) => {
          const key = item.key
          const translatedLabel = t(`info.${key}`)
          const translatedValue =
            key === 'nationality' || key === 'languages'
              ? t(`info.${key}_val`)
              : item.value

          return (
            <li
              key={index}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-muted-foreground">{translatedLabel}</span>
              {key === 'github' ? (
                <a
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-accent transition-colors underline decoration-accent/30"
                >
                  admitruk237
                </a>
              ) : (
                <span className="text-xl">{translatedValue}</span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
