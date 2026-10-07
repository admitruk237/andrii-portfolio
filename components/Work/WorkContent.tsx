'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PageFadeIn } from '@/components/common/PageFadeIn'
import { PROJECTS } from '@/constants'
import { ProjectInfo } from './ProjectInfo'
import { ProjectLinks } from './ProjectLinks'
import { ProjectSlider } from './ProjectSlider'

const INFO_LAYOUT_TRANSITION = {
  layout: { duration: 0.4, ease: 'easeInOut' },
} as const

export const WorkContent = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = PROJECTS[activeIndex]

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-3">
      <PageFadeIn>
        <div className="container mx-auto">
          <div className="flex flex-col gap-5 lg:gap-7">
            <ProjectSlider
              projects={PROJECTS}
              activeIndex={activeIndex}
              onActiveIndexChange={setActiveIndex}
            />
            <div className="w-full flex flex-col justify-between">
              <motion.div
                layout
                transition={INFO_LAYOUT_TRANSITION}
                className="flex flex-col gap-[30px]"
              >
                <ProjectInfo project={activeProject} />
              </motion.div>
              <ProjectLinks
                liveUrl={activeProject.liveUrl}
                githubUrl={activeProject.githubUrl}
              />
            </div>
          </div>
        </div>
      </PageFadeIn>
    </section>
  )
}
