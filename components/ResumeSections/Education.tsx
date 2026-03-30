import { education } from '@/constants'
import { useTranslations } from 'next-intl'

export const Education = () => {
  const t = useTranslations('Resume.education')

  return (
    <div className="flex flex-col gap-[30px] text-center lg:text-left">
      <h3 className="text-4xl font-bold">{t('title')}</h3>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
        {education.items.map((_, index) => {
          const translatedDegree = t(`items.${index}.degree`)
          const translatedInstitution = t(`items.${index}.institution`)
          const translatedDuration = t(`items.${index}.duration`)
          const hasCertificate = t.has(`items.${index}.certificate`)
          const translatedCertificate = hasCertificate
            ? t(`items.${index}.certificate`)
            : null

          return (
            <li
              key={index}
              className="bg-card py-6 px-10 rounded-xl flex flex-col justify-center
                        items-center lg:items-start gap-1"
            >
              <span className="text-accent">{translatedDuration}</span>
              <h3 className="text-xl text-center lg:text-left mb-3">
                {translatedDegree}.
              </h3>

              <div className="h-full w-full">
                <p className="text-muted-foreground">{translatedInstitution}</p>
                {translatedCertificate && (
                  <div className="flex justify-center sm:justify-end items-end h-full pb-6">
                    <a
                      href={translatedCertificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 text-sm sm:text-base"
                    >
                      {t('certificate')}
                    </a>
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
