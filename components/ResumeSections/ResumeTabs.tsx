'use client'

import type { ComponentType } from 'react'
import { useTranslations } from 'next-intl'
import { PageFadeIn } from '@/components/common/PageFadeIn'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { ResumeTabId } from '@/types'
import { AboutMe } from './AboutMe'
import { Education } from './Education'
import { Experience } from './Experience'
import { Skills } from './Skills'

const RESUME_TABS: { id: ResumeTabId; Content: ComponentType }[] = [
  { id: 'experience', Content: Experience },
  { id: 'education', Content: Education },
  { id: 'skills', Content: Skills },
  { id: 'about', Content: AboutMe },
]

const DEFAULT_TAB: ResumeTabId = 'experience'

export const ResumeTabs = () => {
  const t = useTranslations('Resume.tabs')

  return (
    <PageFadeIn className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="container mx-auto">
        <Tabs
          defaultValue={DEFAULT_TAB}
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            {RESUME_TABS.map(({ id }) => (
              <TabsTrigger
                key={id}
                value={id}
              >
                {t(id)}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {RESUME_TABS.map(({ id, Content }) => (
              <TabsContent
                key={id}
                value={id}
                className="w-full"
              >
                <Content />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </PageFadeIn>
  )
}
