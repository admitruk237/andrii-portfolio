import { useTranslations } from 'next-intl'
import { EDUCATION } from '@/constants'

export const Education = () => {
  const t = useTranslations('Resume.education')

  return (
    <div className="flex flex-col gap-[30px] text-center lg:text-left">
      <h3 className="text-4xl font-bold">{t('title')}</h3>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
        {EDUCATION.map(({ id, certificateUrl }) => (
          <li
            key={id}
            className="bg-card py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
          >
            <span className="text-accent">{t(`items.${id}.duration`)}</span>
            <h3 className="text-xl text-center lg:text-left mb-3">
              {t(`items.${id}.degree`)}.
            </h3>

            <div className="h-full w-full">
              <p className="text-muted-foreground">
                {t(`items.${id}.institution`)}
              </p>
              {certificateUrl && (
                <div className="flex justify-center sm:justify-end items-end h-full pb-6">
                  <a
                    href={certificateUrl}
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
        ))}
      </ul>
    </div>
  )
}
