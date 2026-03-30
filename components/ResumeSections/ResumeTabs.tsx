'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import {
  AboutMe,
  Education,
  Experience,
  Skills,
} from '@/components/ResumeSections'
import { useTranslations } from 'next-intl'

export const ResumeTabs = () => {
  const t = useTranslations('Resume.tabs')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience">{t('experience')}</TabsTrigger>
            <TabsTrigger value="education">{t('education')}</TabsTrigger>
            <TabsTrigger value="skills">{t('skills')}</TabsTrigger>
            <TabsTrigger value="about">{t('about')}</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="experience"
              className="w-full"
            >
              <Experience />
            </TabsContent>
            <TabsContent
              value="education"
              className="w-full"
            >
              <Education />
            </TabsContent>
            <TabsContent
              value="skills"
              className="w-full"
            >
              <Skills />
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center lg:text-left"
            >
              <AboutMe />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
