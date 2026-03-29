'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { ProjectInfo, ProjectLinks, ProjectSlider } from '@/components/Work'
import { projects } from '@/constants/projects'
import { Project } from '@/types'

export const WorkContent = () => {
  const [project, setProject] = useState<Project>(projects[0] as Project)

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex] as Project)
  }

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: 'easeIn',
          },
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-5 lg:gap-7">
            <ProjectSlider
              projects={projects as Project[]}
              onSlideChange={handleSlideChange}
            />
            <div className="w-full flex flex-col justify-between">
              <motion.div
                layout
                transition={{
                  layout: { duration: 0.4, ease: 'easeInOut' },
                }}
                className="flex flex-col gap-[30px]"
              >
                <ProjectInfo project={project} />
              </motion.div>
              <ProjectLinks
                liveUrl={project.live}
                githubUrl={project.github}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
