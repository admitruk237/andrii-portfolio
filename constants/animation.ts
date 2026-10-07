import type { Transition, Variants } from 'framer-motion'

export const PAGE_REVEAL_DELAY_S = 1

export const PAGE_REVEAL_DURATION_S = 0.4

export const PAGE_REVEAL_DELAY_MS = PAGE_REVEAL_DELAY_S * 1000

export const PAGE_FADE_IN_TRANSITION: Transition = {
  delay: PAGE_REVEAL_DELAY_S,
  duration: PAGE_REVEAL_DURATION_S,
  ease: 'easeIn',
}

export const PAGE_OVERLAY_FADE_OUT_TRANSITION: Transition = {
  delay: PAGE_REVEAL_DELAY_S,
  duration: PAGE_REVEAL_DURATION_S,
  ease: 'easeInOut',
}

export const STAIRS_COUNT = 6

export const STAIR_STEP_DELAY_S = 0.1

export const STAIR_ANIMATION: Variants = {
  initial: { top: '0%' },
  animate: { top: '100%' },
  exit: { top: ['100%', '0%'] },
}
