import { skills } from '@/constants'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { useTranslations } from 'next-intl'

export const Skills = () => {
  const t = useTranslations('Resume.skills')

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center lg:text-left">
        <h3 className="text-4xl font-bold">{t('title')}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto lg:mx--0">
          {t('description')}
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-[30px] gap-4">
        {skills.skillList.map((skill, index) => {
          return (
            <li key={index}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    className="w-full h-[150px] bg-card rounded-xl
                            flex justify-center items-center group"
                  >
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {skill.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
