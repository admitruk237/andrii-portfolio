'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Skeleton } from '@/components/ui/skeleton'
import type { ProjectPreview } from '@/types'

const SKELETON_FADE_S = 0.5
const VIDEO_FADE_S = 0.8

type Props = {
  preview: ProjectPreview
  isActive: boolean
  title: string
}

const ProjectVideo = ({ src }: { src: string }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: SKELETON_FADE_S }}
            className="absolute inset-0 z-20"
          >
            <Skeleton className="w-full h-full" />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onCanPlayThrough={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: VIDEO_FADE_S }}
        className="absolute inset-0 z-10 w-full h-full object-cover"
      />
    </>
  )
}

export const ProjectMedia = ({ preview, isActive, title }: Props) => {
  const t = useTranslations('Work')

  return (
    <div className="w-full h-full relative overflow-hidden bg-primary/10">
      {preview.kind === 'image' ? (
        <Image
          src={preview.src}
          fill
          className="object-cover"
          alt={t('thumbnailAlt', { title })}
          sizes="(max-width: 1024px) 100vw, 70vw"
          priority={isActive}
        />
      ) : (
        isActive && <ProjectVideo src={preview.src} />
      )}
    </div>
  )
}
