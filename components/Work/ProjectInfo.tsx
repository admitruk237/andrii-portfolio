import { useTranslations } from 'next-intl'
import { Project } from '@/types'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  project: Project
}

export const ProjectInfo = ({ project }: Props) => {
  const t = useTranslations('Work')
  const index = project.id
  const displayDescription = t(`projects.${index}.description`)

  return (
    <div className="flex flex-col gap-[30px] lg:w-[70%] mx-auto w-full min-h-[160px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col gap-[30px]"
        >
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
        </motion.div>
      </AnimatePresence>
      <div className="border border-muted-foreground/20"></div>
    </div>
  )
}
