import useDownloadCV from '@/app/hooks/useDownloadCV';
import React from 'react';
import { Button } from './ui/button';

import { FiCheck, FiDownload } from 'react-icons/fi';
import Social from './Social';
import Photo from './Photo';
import CircularProgress from './CircularProgress';

const AboutMe = () => {
  const { downloadState, progress, handleDownloadCV } = useDownloadCV();

  const getButtonContent = () => {
    switch (downloadState) {
      case 'loading':
        return (
          <div className="flex items-center justify-center w-full">
            <CircularProgress progress={progress} />
          </div>
        );
      case 'success':
        return (
          <div className="flex items-center justify-center w-full">
            <FiCheck className="text-xl text-green-500" />
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2">
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </div>
        );
    }
  };
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between
          lg:pt-8 lg:pb-24"
    >
      <div className="text-center xl:text-left order-2 lg:order-none">
        <span className="text-xl">Frontend Developer</span>
        <h1 className="h1 mb-6">
          Hello I'm <br /> <span className="text-accent">Andrii Dmytruk</span>
        </h1>
        <p className="max-w-[500px] mb-9 text-white/80">
          I'm a junior frontend developer focused on building responsive,
          accessible, and modern web interfaces. I work with technologies like
          HTML, CSS, JavaScript, TypeScript, React, Redux Toolkit, Next.js, and
          Tailwind CSS. I'm passionate about clean code, good UI/UX, and
          constantly improving my skills through practice and learning.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <Button
            variant="outline"
            size="lg"
            className={`uppercase w-[160px] flex items-center gap-2 transition-all duration-300 ${
              downloadState === 'success'
                ? 'border-green-500 text-green-500 hover:bg-green-500'
                : ''
            }`}
            onClick={handleDownloadCV}
            disabled={downloadState === 'loading'}
          >
            {getButtonContent()}
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
