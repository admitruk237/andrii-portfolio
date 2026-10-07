'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import {
  PAGE_OVERLAY_FADE_OUT_TRANSITION,
  PAGE_REVEAL_DELAY_MS,
} from '@/constants'

type Props = {
  children: ReactNode
}

const PageTransition = ({ children }: Props) => {
  const pathname = usePathname()
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)

  useEffect(() => {
    setIsOverlayVisible(true)
    const hideTimer = setTimeout(
      () => setIsOverlayVisible(false),
      PAGE_REVEAL_DELAY_MS,
    )
    return () => clearTimeout(hideTimer)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      {isOverlayVisible && (
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: PAGE_OVERLAY_FADE_OUT_TRANSITION }}
          exit={{ opacity: 0 }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-50"
        />
      )}
      {children}
    </AnimatePresence>
  )
}

export default PageTransition
