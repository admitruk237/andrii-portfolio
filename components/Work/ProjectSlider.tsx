'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import WorkSliderBtns from '@/components/WorkSliderBtns/WorkSliderBtns'
import { ProjectMedia } from './ProjectMedia'

import { useTranslations } from 'next-intl'
import { Project } from '@/types'

type Props = {
  projects: Project[]
  onSlideChange: (swiper: SwiperType) => void
}

export const ProjectSlider = ({ projects, onSlideChange }: Props) => {
  const t = useTranslations('Work')
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
    onSlideChange(swiper)
  }

  return (
    <div className="w-full lg:w-[70%] mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="h-auto mb-3"
        autoHeight={true}
        grabCursor={true}
        onSlideChange={handleSlideChange}
        onSwiper={setSwiper}
      >
        {projects.map((project, index) => {
          const projectIndex = project.id
          const displayTitle = t(`projects.${projectIndex}.title`)
          const displayCategory = t(`projects.${projectIndex}.category`)
          const displayNum = (parseInt(project.id) + 1)
            .toString()
            .padStart(2, '0')

          const isActive = index === activeIndex

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
                    {displayNum}
                  </div>
                </div>
                <div className="w-full relative group aspect-[1105/500] bg-primary/20 rounded-lg overflow-hidden shadow-xl border border-white/5">
                  <div className="absolute inset-0 bg-black/10 z-30 group-hover:bg-black/0 transition-all duration-500" />
                  <ProjectMedia
                    video={project.video}
                    image={project.image}
                    isActive={isActive}
                    title={displayTitle}
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
