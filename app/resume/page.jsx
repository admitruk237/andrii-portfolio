'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
  title: 'About me',
  discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab quasi, 
    quis ipsum, incidunt quaerat perspiciatis sapiente impedit non repellat quos 
    assumenda quidem cum. Earum soluta aliquid esse maiores ullam.`,
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Andrii Dmytruk',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+48) 516 626 351',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Ukrainian ',
    },
    {
      fieldName: 'Email',
      fieldValue: 'admitruk237@gmail.com',
    },
    {
      fieldName: 'GitHub',
      fieldValue: 'https://github.com/admitruk237',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Ukrainian, Polish, English',
    },
  ],
};

const experience = {
  icon: '',
  title: 'My experience',
  description: `I’m a junior frontend developer actively honing my skills through hands-on projects.
   My portfolio currently includes 12 projects of varying complexity, utilizing modern technologies and tools.
    Explore each project in detail in the Work section, where you’ll also find links to demos and GitHub 
    repositories.`,
  items: [
    {
      projects: [
        'GoCorona MyFirstProject',
        'Finance Site',
        'Farm Vest',
        'Home Pro',
        'INTERIA',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      duration: 'Sep 2023 – Dec 2023',
    },
    {
      projects: ['ShoppeStore (Team Project)'],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      duration: 'Dec 2023 – Mar 2024',
    },
    {
      projects: ['Book Library App', 'News Reactify'],
      technologies: [
        'React.js',
        'Redux Toolkit',
        'RTK Query',
        'REST API',
        'React Router DOM',
        'TypeScript',
      ],
      duration: 'May 2024 – Dec 2024',
    },
    {
      projects: ['Get Task Driver'],
      technologies: [
        'React.js',
        'Redux Toolkit',
        'RTK Query',
        'REST API',
        'React Router DOM',
        'TypeScript',
        'Material UI',
        'Framer Motion',
        'JWT',
        'Unit Testing',
        'Storybook',
      ],
      duration: 'Dec 2024 – Apr 2025',
    },
    {
      projects: ['Auth with Firebase'],
      technologies: [
        'React.js',
        'Redux Toolkit',
        'RTK Query',
        'REST API',
        'React Router DOM',
        'TypeScript',
        'Tailwind CSS',
        'Firebase',
        'JWT',
      ],
      duration: 'Apr 2025',
    },
    {
      projects: ['Quotes App'],
      technologies: [
        'Next.js',
        'TypeScript',
        'Next.js Router',
        'REST API',
        'Tailwind CSS',
        'Shadcn UI',
      ],
      duration: 'Jun 2025 – Jul 2025',
    },
    {
      projects: ['My Portfolio'],
      technologies: [
        'Next.js',
        'Next.js Router',
        'Tailwind CSS',
        'Shadcn UI',
        'Framer Motion',
      ],
      duration: 'Jul 2025 – Present',
    },
  ],
};

const education = {
  icon: '',
  title: 'My education',
  items: [
    {
      istitution: 'Online Course Platform',
      degree: 'The Ultimate React Course 2025: React, Next.js, Redux & More',
      duration: '2025',
    },
    {
      istitution: 'Online Course Platform',
      degree: 'Java script Course',
      duration: '2024',
    },
    {
      istitution: 'STEP Computer Academy',
      degree: 'Front-end Track',
      duration: '2023-2024',
    },
    {
      istitution: 'Online Course',
      degree: 'Web Layout Course',
      duration: '2023',
    },
    {
      istitution:
        'Vinnytsia Institute of Trade and Economics of Kyiv National University of Trade and Economics',
      degree: 'Master’s Degree in Management of Trade Organizations',
      duration: '2011-2017',
    },
  ],
};

const skils = {
  title: 'My skills',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiTypescript />,
      name: 'typescript',
    },
    {
      icon: <SiRedux />,
      name: 'redux, redux tool kit',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto lg:mx-0">
                  {experience.discription}
                </p>
                <ScrollArea className="h-[480px">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                        items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.projects}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.technologies}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
