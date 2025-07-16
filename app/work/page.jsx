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
  {
    num: '06',
    categoty: 'React Applications',
    title: 'Book Library App',
    discription: `An online book library with search and filtering functionality, built as part of a course focusedon mastering
     Redux and Redux Toolkit in a React environment The app allows users to search for books by title or author, and filter the results. 
     Initially, it was built using classic Redux and later refactored with Redux Toolkit. A simple Express backend was created in a separate 
     folder to serve book data. Axios is used for fetching data, with error handling and toast notifications to inform users.`,
    stack: [
      { name: 'React' },
      { name: 'Redux' },
      { name: 'Redux Toolkit' },
      { name: 'JavaScript' },
      { name: 'Express' },
      { name: 'Axios' },
      { name: 'Toastify' },
    ],
    image: '/assets/work/library.png',
    github: 'https://github.com/admitruk237/Book-Library-App',
    live: '',
  },
  {
    num: '07',
    categoty: 'React Applications',
    title: 'News Reactfy',
    discription: `A full-featured news application built with React and TypeScript. It allows users to browse the latest news,
     filter by category, search by text, and switch between light and dark themes. The project makes use of Redux Toolkit for state management,
      Axios for API calls, and includes custom hooks, context, and useRef for advanced UI and logic handling.`,
    stack: [
      { name: 'React' },
      { name: 'Redux Toolkit' },
      { name: 'TypeScript' },
      { name: 'Axios' },
      { name: 'Context API' },
      { name: 'Custom Hooks' },
      { name: 'useRef' },
    ],
    image: '/assets/work/news.png',
    github: 'https://github.com/admitruk237/news-reactfy',
    live: 'https://news-reactfy.vercel.app/',
  },
  {
    num: '08',
    categoty: 'React Applications',
    title: 'Get Task Driver',
    discription: `A task management application inspired by Trello, offering functionality for creating and organizing to-do lists and tasks.
     Authenticated users can register, log in, and manage multiple to-do lists. Each list allows adding, editing, deleting tasks, setting deadlines,
      and marking tasks as completed. Users can also rename or delete entire to-do lists.
The project is built using modern tools and libraries including React, Redux, and TypeScript. It features smooth animations with Framer Motion
 and a clean UI built with Material UI. JWT is used for authentication, and navigation is handled with React Router. Unit tests are implemented,
  and snapshot testing is automated via Storybook upon commits.`,
    stack: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Redux' },
      { name: 'Framer Motion' },
      { name: 'Material UI' },
      { name: 'JWT' },
      { name: 'React Router' },
      { name: 'Unit Testing' },
      { name: 'Storybook' },
    ],
    image: '/assets/work/gtd.png',
    github: 'https://github.com/admitruk237/Get-Task-Driver',
    live: '',
  },
  {
    num: '09',
    categoty: 'Next.js Applications',
    title: 'Quotes App',
    discription: `A quote management application that allows users to fetch random quotes from a remote server and interact with them in various ways.
     Users can search quotes by author, category, or text, as well as add new quotes, edit existing ones, and delete them.
The project is built using Next.js and TypeScript, styled with Tailwind CSS and ShadCN UI. It communicates with a REST API for all data operations,
 includes unit testing with Jest, and handles errors via toast notifications using React Toastify or a similar library.`,
    stack: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'ShadCN UI' },
      { name: 'REST API' },
      { name: 'Jest' },
    ],
    image: '/assets/work/quotes.png',
    github: 'https://github.com/admitruk237/Quotes-app',
    live: '',
  },
  {
    num: '10',
    categoty: 'Next.js Applications',
    title: 'Andrii Portfolio',
    discription: `A personal portfolio project built to showcase my skills, projects, and design aesthetic. 
    The site features a modern design, smooth animations, and clean, maintainable code. Built with Next.js and React 19, 
    this project demonstrates professional-level UI structure and interactive functionality.
The application is styled using Tailwind CSS and tw-animate-css, with motion effects powered by Framer Motion. 
It includes UI components from Radix UI and icon support through Lucide and React Icons. Swiper is used for slider functionality, 
and CountUp animates numerical stats.`,
    stack: [
      { name: 'Next.js' },
      { name: 'React 19' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'Radix UI' },
      { name: 'Swiper' },
      { name: 'Lucide React' },
      { name: 'React Icons' },
      { name: 'CountUp' },
      { name: 'tw-animate-css' },
      { name: 'ESLint' },
    ],
    image: '/assets/work/portfolio.png',
    github: 'https://github.com/admitruk237/my-portfolio',
    live: 'https://my-portfolio-axajkhuza-andriis-projects-0fbb3bdd.vercel.app/',
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
        <div className="flex flex-col lg:flex-row lg:gap-[30px]  lg:items-center">
          <div
            className="w-full lg:w-[50%]  flex flex-col lg:justify-between order-2
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
                {project.title}
              </h2>
              <p>{project.categoty}</p>
              <p className="text-white/60">{project.discription}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 ? ',' : '.'}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live !== '' && (
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
                )}
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
