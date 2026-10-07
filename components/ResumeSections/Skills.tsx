import { useTranslations } from 'next-intl'
import { SKILL_CATEGORIES } from '@/constants'
import type { Skill } from '@/types'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

const SkillTile = ({ skill: { name, icon: Icon } }: { skill: Skill }) => (
  <Tooltip>
    <TooltipTrigger
      aria-label={name}
      className="w-full h-[110px] bg-card rounded-xl flex justify-center items-center group"
    >
      <Icon className="text-5xl group-hover:text-accent transition-all duration-300" />
    </TooltipTrigger>
    <TooltipContent>
      <p>{name}</p>
    </TooltipContent>
  </Tooltip>
)

export const Skills = () => {
  const t = useTranslations('Resume.skills')

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center lg:text-left">
        <h3 className="text-4xl font-bold">{t('title')}</h3>
        <p className="max-w-[600px] text-muted-foreground mx-auto lg:mx-0">
          {t('description')}
        </p>
      </div>
      {SKILL_CATEGORIES.map(({ id, skills }) => (
        <section
          key={id}
          className="flex flex-col gap-4"
        >
          <h4 className="text-xl text-center lg:text-left text-accent">
            {t(`categories.${id}`)}
          </h4>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <li key={skill.name}>
                <SkillTile skill={skill} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
