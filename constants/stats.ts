import type { Stat } from '@/types'
import { PROJECTS } from './projects'

const CAREER_START_DATE = new Date(2025, 1, 1)

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000

const yearsSince = (date: Date): number =>
  (Date.now() - date.getTime()) / MS_PER_YEAR

export const STATS: Stat[] = [
  { labelKey: 'projects', value: PROJECTS.length },
  { labelKey: 'experience', value: yearsSince(CAREER_START_DATE), decimals: 1 },
  { labelKey: 'commits', value: 700, suffix: '+' },
  { labelKey: 'hours', value: 1000, suffix: '+' },
]
