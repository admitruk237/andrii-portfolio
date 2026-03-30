'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

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
    let timeout: NodeJS.Timeout

    if (isActive) {
      timeout = setTimeout(() => {
        setShowVideo(true)
      }, 1000)
    } else {
      setShowVideo(false)
      setIsVideoLoaded(false)
    }

    return () => clearTimeout(timeout)
  }, [isActive])

  return (
    <div className="w-full h-full relative overflow-hidden bg-primary/10">
      {image && (
        <motion.div
          initial={false}
          animate={{ opacity: isVideoLoaded && showVideo ? 0 : 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-20"
        >
          <Image
            src={image}
            fill
            className="object-cover"
            alt={`${title} project thumbnail`}
            sizes="(max-width: 1024px) 100vw, 70vw"
            priority={isActive}
            quality={85}
          />
        </motion.div>
      )}

      <AnimatePresence>
        {isActive && video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
