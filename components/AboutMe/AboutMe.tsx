import { Button } from '../ui/button';
import Social from '../Social/Social';
import Photo from '../Photo/Photo';
import { useDownloadCV } from '@/hooks';
import { APP_CONFIG } from '@/config/email';
import { getButtonContent } from './DownloadButton';

const AboutMe = () => {
  const { downloadState, progress, handleDownloadCV } = useDownloadCV();
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between
          lg:pt-8 lg:pb-24"
    >
      <div className="text-center xl:text-left order-2 lg:order-none">
        <span className="text-xl">Frontend Developer</span>
        <h1 className="h1 mb-6">
          Hello I&apos;m <br />{' '}
          <span className="text-accent">{APP_CONFIG.developerName}</span>
        </h1>
        <p className="max-w-[500px] mb-9 text-white/80">
          I&apos;m a junior frontend developer focused on building responsive,
          accessible, and modern web interfaces. I work with technologies like
          HTML, CSS, JavaScript, TypeScript, React, Redux Toolkit, Next.js, and
          Tailwind CSS. I&apos;m passionate about clean code, good UI/UX, and
          constantly improving my skills through practice and learning.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <Button
            variant="outline"
            size="lg"
            className={`uppercase w-[160px] flex items-center gap-2 transition-all duration-300 ${
              downloadState === 'success'
                ? 'border-green-500 text-green-500 hover:bg-green-500'
                : downloadState === 'error'
                ? 'border-red-500 text-red-500 hover:bg-red-500'
                : ''
            }`}
            onClick={handleDownloadCV}
            disabled={downloadState === 'loading'}
            aria-label="Download CV"
          >
            {getButtonContent(downloadState, progress)}
          </Button>

          <div className="mb-8 lg:mb-0">
            <Social
              containerSyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                  items-center text-accent text-base hover:bg-accent hover:text-primary 
                  hover:transition-all duration-500"
            />
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
    </div>
  );
};

export default AboutMe;
