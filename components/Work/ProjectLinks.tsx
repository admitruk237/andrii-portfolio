import Link from 'next/link';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type Props = {
  liveUrl: string;
  githubUrl: string;
};

export const ProjectLinks = ({ liveUrl, githubUrl }: Props) => {
  return (
    <div className="flex items-center gap-4">
      {liveUrl !== '' && (
        <Link href={liveUrl}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
              </TooltipTrigger>
              <TooltipContent className="">
                <p>Live project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      )}
      <Link href={githubUrl}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
              <BsGithub className="text-white text-3xl group-hover:text-accent" />
            </TooltipTrigger>
            <TooltipContent className="">
              <p>Github repository</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </div>
  );
};
