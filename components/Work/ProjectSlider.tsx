'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { useTranslations } from 'next-intl'
import WorkSliderBtns from '@/components/WorkSliderBtns/WorkSliderBtns'
import { formatOrdinal } from '@/lib/utils'
import type { Project } from '@/types'
import { ProjectMedia } from './ProjectMedia'

const SLIDE_GAP_PX = 30

type Props = {
  projects: Project[]
  activeIndex: number
  onActiveIndexChange: (index: number) => void
}

export const ProjectSlider = ({
  projects,
  activeIndex,
  onActiveIndexChange,
}: Props) => {
  const t = useTranslations('Work')
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="w-full lg:w-[70%] mx-auto">
      <Swiper
        spaceBetween={SLIDE_GAP_PX}
        slidesPerView={1}
        className="h-auto mb-3"
        autoHeight
        grabCursor
        onSlideChange={(instance) => onActiveIndexChange(instance.activeIndex)}
        onSwiper={setSwiper}
      >
        {projects.map((project, index) => {
          const title = t(`projects.${project.id}.title`)

          return (
            <SwiperSlide
              key={project.id}
              className="w-full"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center gap-2 px-4">
                  <div>
                    <h2 className="text-xl lg:text-3xl font-bold leading-none text-foreground">
                      {title}
                    </h2>
                    <p className="text-accent">
                      {t(`categories.${project.category}`)}
                    </p>
                  </div>
                  <div className="text-3xl lg:text-5xl leading-none font-extrabold text-transparent text-outline">
                    {formatOrdinal(index)}
                  </div>
                </div>
                <div className="w-full relative group aspect-[1105/500] bg-primary/20 rounded-lg overflow-hidden shadow-xl border border-white/5">
                  <div className="absolute inset-0 bg-black/10 z-30 group-hover:bg-black/0 transition-all duration-500" />
                  <ProjectMedia
                    preview={project.preview}
                    isActive={index === activeIndex}
                    title={title}
                  />
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
