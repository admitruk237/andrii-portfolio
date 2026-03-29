import React from 'react'
import { SkillsMetadata } from '@/types'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiSqlite,
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
      icon: <SiRedux />,
      name: 'RTK',
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
  ],
}

export { skills }
export default skills
