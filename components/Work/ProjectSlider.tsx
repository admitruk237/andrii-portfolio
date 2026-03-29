'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import WorkSliderBtns from '@/components/WorkSliderBtns/WorkSliderBtns'

import { useTranslations } from 'next-intl'
import { Project } from '@/types'

type Props = {
  projects: Project[]
  onSlideChange: (swiper: SwiperType) => void
}

export const ProjectSlider = ({ projects, onSlideChange }: Props) => {
  const t = useTranslations('Work')
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="w-full lg:w-[70%] mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="h-auto mb-3"
        autoHeight={true}
        grabCursor={true}
        onSlideChange={onSlideChange}
        onSwiper={setSwiper}
      >
        {projects.map((project, index) => {
          const projectIndex = (parseInt(project.num) - 1).toString()
          const hasTranslation = t.has(`projects.${projectIndex}`)

          const displayTitle = hasTranslation
            ? t(`projects.${projectIndex}.title`)
            : project.title
          const displayCategory = hasTranslation
            ? t(`projects.${projectIndex}.category`)
            : project.category

          return (
            <SwiperSlide
              key={index}
              className="w-full"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center gap-2 px-4">
                  <div>
                    <h2 className="text-xl lg:text-3xl font-bold leading-none text-foreground group-hover:text-accent transition-all duration-500">
                      {displayTitle}
                    </h2>
                    <p className="text-accent">{displayCategory}</p>
                  </div>
                  <div className="text-3xl lg:text-5xl  leading-none font-extrabold text-transparent text-outline">
                    {project.num}
                  </div>
                </div>
                <div className="w-full relative group aspect-[1105/500] bg-primary/20 rounded-lg overflow-hidden shadow-xl border border-white/5">
                  <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-black/0 transition-all duration-500" />
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      width={1918}
                      height={864}
                      className="w-full h-full object-cover"
                      alt={`${project.title} project image`}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-accent/5 flex items-center justify-center">
                      <p className="text-muted-foreground">
                        No Preview Available
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <WorkSliderBtns swiper={swiper} />
    </div>
  )
}
