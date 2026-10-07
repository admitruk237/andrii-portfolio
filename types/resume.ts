import type { Messages } from 'next-intl'
import type { IconType } from 'react-icons'

type ResumeMessages = Messages['Resume']

export type ResumeTabId = keyof ResumeMessages['tabs']

export type ExperienceId = keyof ResumeMessages['experience']['items']

export type ExperienceItem = {
  id: ExperienceId
  technologies: string[]
}

export type EducationId = keyof ResumeMessages['education']['items']

export type EducationItem = {
  id: EducationId
  certificateUrl?: string
}

export type AboutLabelKey = keyof ResumeMessages['about']['info']

export type AboutTranslatedKey = keyof ResumeMessages['about']['values'] &
  AboutLabelKey

export type AboutInfoItem =
  | { kind: 'text'; labelKey: AboutLabelKey; value: string }
  | { kind: 'translated'; labelKey: AboutTranslatedKey }
  | { kind: 'link'; labelKey: AboutLabelKey; text: string; href: string }

export type SkillCategoryId = keyof ResumeMessages['skills']['categories']

export type Skill = {
  name: string
  icon: IconType
}

export type SkillCategory = {
  id: SkillCategoryId
  skills: Skill[]
}
