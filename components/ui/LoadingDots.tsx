import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const DOT_INDEXES = [0, 1, 2]
const BOUNCE_HEIGHT_PX = 6
const BOUNCE_DURATION_S = 0.5
const DOT_STAGGER_S = 0.1

type Props = {
  label: string
  className?: string
}

const LoadingDots = ({ label, className }: Props) => (
  <div
    role="status"
    aria-label={label}
    className={cn('flex items-center justify-center space-x-1', className)}
  >
    {DOT_INDEXES.map((index) => (
      <motion.div
        key={index}
        className="w-2 h-2 bg-primary rounded-full"
        animate={{ y: [0, -BOUNCE_HEIGHT_PX, 0], scaleY: [1, 0.8, 1] }}
        transition={{
          duration: BOUNCE_DURATION_S,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: index * DOT_STAGGER_S,
        }}
      />
    ))}
  </div>
)

export default LoadingDots
