'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { PAGE_OVERLAY_FADE_OUT_TRANSITION } from '@/constants'
import Stairs from '../Stairs/Stairs'

const StairTransition = () => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-[60] flex">
          <Stairs />
        </div>
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: PAGE_OVERLAY_FADE_OUT_TRANSITION }}
        />
      </div>
    </AnimatePresence>
  )
}

export default StairTransition
