const projects = [
  {
    num: '01',
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
    live: 'https://andrii-portfolio-one.vercel.app/',
  },
  {
    num: '02',
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
    num: '03',
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
    num: '04',
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
    num: '05',
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
    num: '06',
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
    num: '07',
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
    num: '08',
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
    num: '09',
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
    num: '10',
    categoty: 'Landing Pages & Simple Websites',
    title: 'Finance',
    discription:
      'A website for financial services with a clean and professional UI.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascritp' }],
    image: '/assets/work/finance.png',
    github: 'https://github.com/admitruk237/Finance-site',
    live: 'https://admitruk237.github.io/Finance-site/',
  },
];

export { projects };
export default projects;
