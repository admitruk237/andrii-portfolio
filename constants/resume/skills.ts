import { BsCursorFill } from 'react-icons/bs'
import {
  FaCss3,
  FaCubes,
  FaHtml5,
  FaJs,
  FaLayerGroup,
  FaProjectDiagram,
  FaReact,
} from 'react-icons/fa'
import { GiBearFace } from 'react-icons/gi'
import {
  SiAxios,
  SiClaude,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiJest,
  SiJira,
  SiJsonwebtokens,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiRadixui,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiStorybook,
  SiTailwindcss,
  SiTestinglibrary,
  SiThreedotjs,
  SiTypescript,
  SiVitest,
  SiWebgl,
  SiZod,
} from 'react-icons/si'
import { TbApi, TbBrandFramerMotion, TbChartBar } from 'react-icons/tb'
import type { SkillCategory } from '@/types'

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    skills: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: FaJs },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3 },
    ],
  },
  {
    id: 'frameworks',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Zustand', icon: GiBearFace },
      { name: 'TanStack Query', icon: SiReactquery },
      { name: 'Redux Toolkit / RTK Query', icon: SiRedux },
      { name: 'React Hook Form', icon: SiReacthookform },
      { name: 'Zod / Yup', icon: SiZod },
      { name: 'Axios', icon: SiAxios },
      { name: 'Recharts', icon: TbChartBar },
      { name: 'Framer Motion', icon: TbBrandFramerMotion },
      { name: 'PixiJS (React Pixi)', icon: SiWebgl },
      { name: 'Three.js', icon: SiThreedotjs },
    ],
  },
  {
    id: 'styling',
    skills: [
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'shadcn/ui', icon: SiShadcnui },
      { name: 'Radix UI', icon: SiRadixui },
      { name: 'Material UI', icon: SiMui },
    ],
  },
  {
    id: 'backend',
    skills: [
      { name: 'REST API', icon: TbApi },
      { name: 'WebSockets (Socket.IO)', icon: SiSocketdotio },
      { name: 'JWT', icon: SiJsonwebtokens },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
    ],
  },
  {
    id: 'testing',
    skills: [
      { name: 'Jest', icon: SiJest },
      { name: 'React Testing Library', icon: SiTestinglibrary },
      { name: 'Vitest', icon: SiVitest },
      { name: 'Storybook', icon: SiStorybook },
    ],
  },
  {
    id: 'architecture',
    skills: [
      { name: 'Feature-Sliced Design', icon: FaProjectDiagram },
      { name: 'Clean Architecture', icon: FaLayerGroup },
      { name: 'SOLID', icon: FaCubes },
    ],
  },
  {
    id: 'tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'GitLab', icon: SiGitlab },
      { name: 'Jira', icon: SiJira },
      { name: 'CI/CD', icon: SiGithubactions },
    ],
  },
  {
    id: 'ai',
    skills: [
      { name: 'Cursor', icon: BsCursorFill },
      { name: 'Claude Code', icon: SiClaude },
      { name: 'OpenAI Codex', icon: SiOpenai },
    ],
  },
]
