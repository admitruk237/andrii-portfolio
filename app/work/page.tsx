'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { ProjectInfo, ProjectLinks, ProjectSlider } from '@/components/Work';
import { projects } from '@/constants/projects';

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
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
          <div className="flex flex-col lg:flex-row lg:gap-[30px] lg:items-center">
            <div className="w-full lg:w-[50%] flex flex-col lg:justify-between order-2 lg:order-none">
              <motion.div layout className="flex flex-col gap-[30px]">
                <ProjectInfo project={project} />
              </motion.div>
              <ProjectLinks liveUrl={project.live} githubUrl={project.github} />
            </div>
            <ProjectSlider
              projects={projects}
              onSlideChange={handleSlideChange}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
