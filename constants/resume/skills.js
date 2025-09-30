import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si';

const skills = {
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
  ],
};

export { skills };
export default skills;
