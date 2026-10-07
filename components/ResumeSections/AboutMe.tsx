import { useTranslations } from 'next-intl'
import { ABOUT_INFO } from '@/constants'
import type { AboutInfoItem } from '@/types'

const AboutInfoValue = ({ item }: { item: AboutInfoItem }) => {
  const t = useTranslations('Resume.about')

  switch (item.kind) {
    case 'link':
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-accent transition-colors underline decoration-accent/30"
        >
          {item.text}
        </a>
      )
    case 'translated':
      return <span className="text-xl">{t(`values.${item.labelKey}`)}</span>
    case 'text':
      return <span className="text-xl">{item.value}</span>
  }
}

export const AboutMe = () => {
  const t = useTranslations('Resume.about')

  return (
    <div className="flex flex-col gap-[30px] text-center lg:text-left">
      <h3 className="text-4xl font-bold">{t('title')}</h3>
      <p className="max-w-[600px] text-muted-foreground mx-auto lg:mx-0 whitespace-pre-line">
        {t('description')}
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-8 mx-auto lg:mx-0">
        {ABOUT_INFO.map((item) => (
          <li
            key={item.labelKey}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <span className="text-muted-foreground">
              {t(`info.${item.labelKey}`)}
            </span>
            <AboutInfoValue item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
