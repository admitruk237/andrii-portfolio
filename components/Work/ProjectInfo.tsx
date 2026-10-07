import { useTranslations } from 'next-intl'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '@/types'

const INFO_SWAP_OFFSET_PX = 10
const INFO_SWAP_DURATION_S = 0.2

type Props = {
  project: Project
}

export const ProjectInfo = ({ project }: Props) => {
  const t = useTranslations('Work')
  const lastStackIndex = project.stack.length - 1

  return (
    <div className="flex flex-col gap-[30px] lg:w-[70%] mx-auto w-full min-h-[160px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: INFO_SWAP_OFFSET_PX }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -INFO_SWAP_OFFSET_PX }}
          transition={{ duration: INFO_SWAP_DURATION_S }}
          className="flex flex-col gap-[30px]"
        >
          <p className="text-muted-foreground">
            {t(`projects.${project.id}.description`)}
          </p>
          <ul className="flex gap-4 flex-wrap">
            {project.stack.map((technology, index) => (
              <li
                key={technology}
                className="text-accent"
              >
                {technology}
                {index === lastStackIndex ? '.' : ','}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
      <div className="border border-muted-foreground/20" />
    </div>
  )
}
