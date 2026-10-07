import { useTranslations } from 'next-intl'
import { EXPERIENCE } from '@/constants'

export const Experience = () => {
  const t = useTranslations('Resume.experience')

  return (
    <div className="flex flex-col gap-[30px] text-center lg:text-left">
      <h3 className="text-4xl font-bold">{t('title')}</h3>
      <p className="text-muted-foreground mx-auto lg:mx-0">
        {t('description')}
      </p>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
        {EXPERIENCE.map(({ id, technologies }) => (
          <li
            key={id}
            className="bg-card py-6 px-10 rounded-xl flex flex-col items-center lg:items-start gap-3"
          >
            <span className="text-accent">{t(`items.${id}.duration`)}</span>
            <h3 className="text-xl text-center lg:text-left">
              {t(`items.${id}.position`)}, {t(`items.${id}.company`)}
            </h3>
            <p className="text-muted-foreground">
              {t(`items.${id}.description`)}
            </p>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="text-accent text-sm"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
