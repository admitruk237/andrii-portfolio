import { motion } from 'framer-motion'
import {
  PAGE_REVEAL_DURATION_S,
  STAIR_ANIMATION,
  STAIR_STEP_DELAY_S,
  STAIRS_COUNT,
} from '@/constants'

const STAIR_INDEXES = Array.from({ length: STAIRS_COUNT }, (_, index) => index)

const reverseIndex = (index: number): number => STAIRS_COUNT - index - 1

const Stairs = () => (
  <>
    {STAIR_INDEXES.map((index) => (
      <motion.div
        key={index}
        variants={STAIR_ANIMATION}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: PAGE_REVEAL_DURATION_S,
          ease: 'easeInOut',
          delay: reverseIndex(index) * STAIR_STEP_DELAY_S,
        }}
        className="h-full w-full bg-secondary relative"
      />
    ))}
  </>
)

export default Stairs
