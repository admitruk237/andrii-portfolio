export type ProjectStackItem = {
  name: string
}

export type Project = {
  id: string
  stack: ProjectStackItem[]
  image?: string
  video?: string
  github: string
  live: string
}
