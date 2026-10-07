import type { Messages } from 'next-intl'

export type StatLabelKey = keyof Messages['Stats']

export type Stat = {
  labelKey: StatLabelKey
  value: number
  suffix?: string
  decimals?: number
}
