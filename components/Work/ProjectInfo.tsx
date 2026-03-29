import { useTranslations } from 'next-intl'
import { Project } from '@/types'

type Props = {
  project: Project
}

export const ProjectInfo = ({ project }: Props) => {
  const t = useTranslations('Work')
  const index = (parseInt(project.num) - 1).toString()
  const hasTranslation = t.has(`projects.${index}`)

  const displayDescription = hasTranslation
    ? t(`projects.${index}.description`)
    : project.description

  return (
    <div className="flex flex-col gap-[30px] h-full  lg:w-[70%] mx-auto w-full">
      <p className="text-muted-foreground">{displayDescription}</p>
      <ul className="flex gap-4 flex-wrap">
        {project.stack.map((item, index) => (
          <li
            key={index}
            className="text-accent"
          >
            {item.name}
            {index !== project.stack.length - 1 ? ',' : '.'}
          </li>
        ))}
      </ul>
      <div className="border border-muted-foreground/20"></div>
    </div>
  )
}
