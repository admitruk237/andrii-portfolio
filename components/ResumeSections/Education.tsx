import { education } from '@/constants'
import { useTranslations } from 'next-intl'

export const Education = () => {
  const t = useTranslations('Resume.education')

  return (
    <div className="flex flex-col gap-[30px] text-center lg:text-left">
      <h3 className="text-4xl font-bold">{t('title')}</h3>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
        {education.items.map((item, index) => {
          const hasTranslation = t.has(`items.${index}`)
          const translatedDegree = hasTranslation
            ? t(`items.${index}.degree`)
            : item.degree
          const translatedInstitution = hasTranslation
            ? t(`items.${index}.institution`)
            : item.istitution

          return (
            <li
              key={index}
              className="bg-card  py-6 px-10 rounded-xl flex flex-col justify-center
                        items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>
              <h3
                key={index}
                className="text-xl text-center lg:text-left mb-3"
              >
                {translatedDegree}.
              </h3>

              <div className="flex items-center gap-3 ">
                <p
                  key={index}
                  className="text-muted-foreground"
                >
                  {translatedInstitution}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
