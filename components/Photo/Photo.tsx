'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { PageFadeIn } from '@/components/common/PageFadeIn'
import { PAGE_REVEAL_DURATION_S } from '@/constants'

const PHOTO_SRC = '/assets/photo.png'
const PHOTO_REVEAL_DELAY_S = 0.5
const RING_VIEWBOX_SIZE = 506
const RING_CENTER = RING_VIEWBOX_SIZE / 2
const RING_RADIUS = 250
const RING_ROTATION_DURATION_S = 20

const Photo = () => {
  const t = useTranslations('Header')

  return (
    <div className="w-full h-full relative">
      <PageFadeIn>
        <motion.div
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: PHOTO_REVEAL_DELAY_S,
              duration: PAGE_REVEAL_DURATION_S,
              ease: 'easeInOut',
            },
          }}
        >
          <Image
            src={PHOTO_SRC}
            priority
            quality={100}
            fill
            alt={t('name')}
            className="object-contain"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox={`0 0 ${RING_VIEWBOX_SIZE} ${RING_VIEWBOX_SIZE}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={RING_CENTER}
            cy={RING_CENTER}
            r={RING_RADIUS}
            stroke="var(--color-accent)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: RING_ROTATION_DURATION_S,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </PageFadeIn>
    </div>
  )
}

export default Photo
