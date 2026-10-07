'use client'

import CountUp from 'react-countup'
import { useTranslations } from 'next-intl'
import { PAGE_REVEAL_DELAY_S, STATS } from '@/constants'

const COUNT_UP_DURATION_S = 5
const COUNT_UP_DELAY_S = PAGE_REVEAL_DELAY_S * 2
const SHORT_LABEL_MAX_LENGTH = 15

export const Stats = () => {
  const t = useTranslations('Stats')

  return (
    <section className="pt-4 pb-12 lg:pt-0 lg:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 max-w-[80vw] mx-auto lg:max-w-none">
          {STATS.map(({ labelKey, value, decimals = 0, suffix = '' }) => {
            const label = t(labelKey)
            const isShortLabel = label.length < SHORT_LABEL_MAX_LENGTH

            return (
              <div
                key={labelKey}
                className="flex-1 flex gap-4 items-center justify-start sm:justify-center lg:justify-start"
              >
                <CountUp
                  end={value}
                  duration={COUNT_UP_DURATION_S}
                  delay={COUNT_UP_DELAY_S}
                  decimals={decimals}
                  suffix={suffix}
                  className="text-4xl lg:text-6xl font-extrabold"
                />
                <p
                  className={`${isShortLabel ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-muted-foreground`}
                >
                  {label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
