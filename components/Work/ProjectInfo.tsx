import { useTranslations } from 'next-intl'

type StackItem = {
  name: string
}

type Project = {
  num: string
  title: string
  category: string
  description: string
  stack: StackItem[]
}

type Props = {
  project: Project
}

export const ProjectInfo = ({ project }: Props) => {
  const t = useTranslations('Work')
  const index = (parseInt(project.num) - 1).toString()
  const hasTranslation = t.has(`projects.${index}`)

  const displayTitle = hasTranslation
    ? t(`projects.${index}.title`)
    : project.title
  const displayCategory = hasTranslation
    ? t(`projects.${index}.category`)
    : project.category
  const displayDescription = hasTranslation
    ? t(`projects.${index}.description`)
    : project.description

  return (
    <div className="flex flex-col gap-[30px] h-[50%] ">
      <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
        {project.num}
      </div>
      <h2 className="text-[42px] font-bold leading-none text-foreground group-hover:text-accent transition-all duration-500">
        {displayTitle}
      </h2>
      <p>{displayCategory}</p>
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
