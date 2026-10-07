import { useTranslations } from 'next-intl'
import type { IconType } from 'react-icons'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

type LinkButtonProps = {
  href: string
  label: string
  icon: IconType
}

const ProjectLinkButton = ({ href, label, icon: Icon }: LinkButtonProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-[70px] h-[70px] rounded-full bg-card flex justify-center items-center group hover:bg-accent/10 transition-all duration-300"
      >
        <Icon className="text-foreground text-3xl group-hover:text-accent transition-all duration-300" />
      </a>
    </TooltipTrigger>
    <TooltipContent>
      <p>{label}</p>
    </TooltipContent>
  </Tooltip>
)

type Props = {
  liveUrl?: string
  githubUrl: string
}

export const ProjectLinks = ({ liveUrl, githubUrl }: Props) => {
  const t = useTranslations('Work.links')

  return (
    <div className="flex items-center gap-4 my-2 lg:w-[70%] mx-auto w-full">
      {liveUrl && (
        <ProjectLinkButton
          href={liveUrl}
          label={t('live')}
          icon={BsArrowUpRight}
        />
      )}
      <ProjectLinkButton
        href={githubUrl}
        label={t('github')}
        icon={BsGithub}
      />
    </div>
  )
}
