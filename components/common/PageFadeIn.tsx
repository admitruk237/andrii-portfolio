'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { PAGE_FADE_IN_TRANSITION } from '@/constants'

type Props = {
  children: ReactNode
  className?: string
}

export const PageFadeIn = ({ children, className }: Props) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: PAGE_FADE_IN_TRANSITION }}
    className={className}
  >
    {children}
  </motion.div>
)
