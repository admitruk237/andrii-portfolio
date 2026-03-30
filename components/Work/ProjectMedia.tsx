'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {
  video?: string
  image?: string
  isActive: boolean
  title: string
}

export const ProjectMedia = ({ video, image, isActive, title }: Props) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    if (isActive && video) {
      setShowVideo(true)
    } else {
      setShowVideo(false)
      setIsVideoLoaded(false)
    }
  }, [isActive, video])

  return (
    <div className="w-full h-full relative overflow-hidden bg-primary/10">
      <AnimatePresence>
        {image && (!isVideoLoaded || !isActive) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-20"
          >
            <Image
              src={image}
              fill
              className="object-cover"
              alt={`${title} project thumbnail`}
              sizes="(max-width: 1024px) 100vw, 70vw"
              priority={isActive}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && video && !image && !isVideoLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-20"
          >
            <Skeleton className="w-full h-full" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && video && showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-10"
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              onCanPlayThrough={() => setIsVideoLoaded(true)}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!video && !image && (
        <div className="w-full h-full flex items-center justify-center bg-accent/5">
          <p className="text-muted-foreground">No Preview Available</p>
        </div>
      )}
    </div>
  )
}
