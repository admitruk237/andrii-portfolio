'use client'

import CountUp from 'react-countup'
import { stats } from '@/constants/stats/stats'
import { useTranslations } from 'next-intl'

const STAT_KEY_MAP: Record<string, string> = {
  'Projects completed': 'projects',
  'completed courses': 'courses',
  'Code commits': 'commits',
  'Hours of learning ': 'hours',
}

export const Stats = () => {
  const t = useTranslations('Stats')

  return (
    <section className="pt-4 pb-12 lg:pt-0 lg:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 max-w-[80vw] mx-auto lg:max-w-none">
          {stats.map((item, index) => {
            const translationKey = STAT_KEY_MAP[item.text] || item.text
            const translatedText = t(translationKey)

            return (
              <div
                className="flex-1 flex gap-4 items-center justify-start sm:justify-center lg:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  suffix={item.num === 1000 || item.num === 400 ? '+' : ''}
                  className="text-4xl  lg:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    translatedText.length < 15
                      ? 'max-w-[100px]'
                      : 'max-w-[150px]'
                  } leading-snug text-muted-foreground`}
                >
                  {translatedText}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
