import Link from 'next/link'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useTranslations } from 'next-intl'

type Props = {
  liveUrl: string
  githubUrl: string
}

export const ProjectLinks = ({ liveUrl, githubUrl }: Props) => {
  const t = useTranslations('Work.links')

  return (
    <div className="flex items-center gap-4 my-2 lg:w-[70%] mx-auto w-full">
      {liveUrl !== '' && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger
                className="cursor-pointer w-[70px] h-[70px] rounded-full bg-card flex justify-center items-center group
                                       hover:bg-accent/10 transition-all duration-300"
              >
                <BsArrowUpRight className="text-foreground text-3xl group-hover:text-accent transition-all duration-300" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('live')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      )}
      <Link
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger
              className="cursor-pointer w-[70px] h-[70px] rounded-full bg-card flex justify-center items-center group
                                     hover:bg-accent/10 transition-all duration-300"
            >
              <BsGithub className=" text-foreground text-3xl group-hover:text-accent transition-all duration-300" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{t('github')}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </div>
  )
}
