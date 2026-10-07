import type { Messages } from 'next-intl'

type WorkMessages = Messages['Work']

export type ProjectId = keyof WorkMessages['projects']

export type ProjectCategory = keyof WorkMessages['categories']

export type ProjectPreview = {
  kind: 'video' | 'image'
  src: string
}

export type Project = {
  id: ProjectId
  category: ProjectCategory
  stack: string[]
  preview: ProjectPreview
  githubUrl: string
  liveUrl?: string
}
