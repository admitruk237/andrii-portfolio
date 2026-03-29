import { ReactNode } from 'react'

export type Skill = {
  skillName: string
  percentage: number
}

export type Experience = {
  company: string
  position: string
  duration: string
}

export type Education = {
  institution: string
  degree: string
  duration: string
  certificate?: string
}

export type AboutInfo = {
  key: string
  value: string
}

export type AboutMetadata = {
  info: AboutInfo[]
}

export type ExperienceItem = {
  technologies: string[]
}

export type ExperienceMetadata = {
  items: ExperienceItem[]
}

export type EducationItem = {
  // Empty for now as all text is in i18n
}

export type EducationMetadata = {
  items: EducationItem[]
}

export type SkillItem = {
  icon: ReactNode
  name: string
}

export type SkillsMetadata = {
  skillList: SkillItem[]
}
