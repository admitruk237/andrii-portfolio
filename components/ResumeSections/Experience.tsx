import { experience } from '@/constants'
import { useTranslations } from 'next-intl'

export const Experience = () => {
  const t = useTranslations('Resume.experience')

  return (
    <div className="flex flex-col gap-[30px] text-center lg:text-left">
      <h3 className="text-4xl font-bold">{t('title')}</h3>
      <p className="text-muted-foreground mx-auto lg:mx-0">
        {t('description')}
      </p>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
        {experience.items.map((item, index) => {
          const hasTranslation = t.has(`items.${index}`)
          const translatedProjects = hasTranslation
            ? t.raw(`items.${index}.projects`)
            : item.projects
          const translatedTech =
            hasTranslation && t.has(`items.${index}.technologies`)
              ? [
                  ...t.raw(`items.${index}.technologies`),
                  ...item.technologies.slice(1),
                ]
              : item.technologies

          return (
            <li
              key={index}
              className="bg-card  py-6 px-10 rounded-xl flex flex-col justify-center
                        items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>
              <div className="flex gap-2 flex-wrap mb-3">
                {translatedProjects.map((project: string, pIndex: number) => {
                  return (
                    <h3
                      key={pIndex}
                      className="text-xl   text-center lg:text-left"
                    >
                      {project}.
                    </h3>
                  )
                })}
              </div>

              <div className="flex items-center gap-3 ">
                <div className="flex flex-wrap gap-2">
                  {translatedTech.map((tech: string, tIndex: number) => {
                    return (
                      <p
                        key={tIndex}
                        className="text-muted-foreground"
                      >
                        {tech}
                      </p>
                    )
                  })}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
