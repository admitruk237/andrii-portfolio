import React from 'react'
import { SkillsMetadata } from '@/types'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaRoute,
  FaProjectDiagram,
  FaChartLine,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiSqlite,
  SiReactquery,
  SiShadcnui,
} from 'react-icons/si'

const skills: SkillsMetadata = {
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
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <SiRedux />,
      name: 'Redux Toolkit',
    },
    {
      icon: <SiReactquery />,
      name: 'TanStack Query',
    },
    {
      icon: <FaRoute />,
      name: 'TanStack Router',
    },
    {
      icon: <SiShadcnui />,
      name: 'Shadcn UI',
    },
    {
      icon: <FaChartLine />,
      name: 'Recharts',
    },
    {
      icon: <FaProjectDiagram />,
      name: 'FSD Architecture',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiExpress />,
      name: 'express.js',
    },
    {
      icon: <SiSqlite />,
      name: 'sqlite',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
  ],
}

export { skills }
export default skills
