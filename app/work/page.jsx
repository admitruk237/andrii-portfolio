'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    categoty: 'Landing Pages & Simple Websites',
    title: 'Finance',
    discription:
      'A website for financial services with a clean and professional UI.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascritp' }],
    image: '/assets/work/finance.png',
    github: 'https://github.com/admitruk237/Finance-site',
    live: 'https://admitruk237.github.io/Finance-site/',
  },
  {
    num: '02',
    categoty: 'Landing Pages & Simple Websites',
    title: 'GoCorona ',
    discription:
      'A responsive landing page promoting health awareness a clean design.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascritp' }],
    image: '/assets/work/corona.png',
    github: 'https://github.com/admitruk237/GoCorona',
    live: 'https://go-corona-umber.vercel.app/',
  },
  {
    num: '03',
    categoty: 'Landing Pages & Simple Websites',
    title: 'Farm Vest',
    discription:
      'A responsive landing page showcasing agricultural investment opportunities. Built with standard technologies (HTML, CSS, JS), featuring animations, parallax effects.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascritp' }],
    image: '/assets/work/farm.png',
    github: 'https://github.com/admitruk237/Farm-Vest',
    live: 'https://admitruk237.github.io/Farm-Vest/',
  },
  {
    num: '04',
    categoty: 'Landing Pages & Simple Websites',
    title: 'Home Pro',
    discription:
      'A responsive landing page for a home service company, featuring scroll-triggered animations, an image/content slider, an accordion component, and smooth navigation between sections via menu clicks.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascritp' }],
    image: '/assets/work/homePro.png',
    github: 'https://github.com/admitruk237/Home-Pro',
    live: 'https://admitruk237.github.io/Home-Pro/',
  },
  {
    num: '05',
    categoty: 'E-commerce & Collaborative',
    title: 'Shop store',
    discription: `Online Jewelry Shop A full-featured e-commerce website built entirely with HTML, CSS, and 
    JavaScript — without any frameworks. This was a collaborative 
team project where everything was developed from scratch. All UI logic is custom-written, and cart functionality is powered by LocalStorage.
I actively contributed to development and decision-making, implemented forms, worked on UI elements, and helped plan the app structure.`,
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascritp' }],
    image: '/assets/work/shopStore.png',
    github: 'https://github.com/admitruk237/ShoppeStore',
    live: 'https://shoppestore.netlify.app/',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div
            className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2
          lg:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent
              transition-all duration-500 "
              >
                {project.categoty}
              </h2>
              <p className="text-white/60">{project.discription}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 
                    flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 
                    flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[300px] sm:h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStylels="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
              lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
              w-[44px] h-[44px] flex justify-center items-center transition-all"
                className=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
