const projects = [
  {
    num: '01',
    categoty: 'Next.js Applications',
    title: 'Andrii Portfolio',
    discription: `A personal portfolio website designed to showcase my skills, projects, and design approach. 
It features a modern responsive layout, smooth animations, and an intuitive structure. 
Built with Next.js, React 19, and TypeScript, styled using Tailwind CSS, Radix UI, and Framer Motion. 
This project highlights my ability to deliver polished, production-ready applications.`,
    stack: [
      { name: 'Next.js' },
      { name: 'Typescript' },
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
    discription: `A feature-rich news application built with React and TypeScript. 
Users can browse articles, filter by category, search, and switch between light and dark modes. 
The project uses Redux Toolkit for state management, Axios for API calls, and custom hooks for advanced logic. 
It demonstrates practical experience in scalable and interactive React applications.`,
    stack: [
      { name: 'React' },
      { name: 'Redux Toolkit' },
      { name: 'TypeScript' },
      { name: 'Axios' },
      { name: 'Context API' },
      { name: 'Custom Hooks' },
      { name: 'useRef' },
      { name: 'Vite' },
    ],
    image: '/assets/work/news.png',
    github: 'https://github.com/admitruk237/news-reactfy',
    live: 'https://news-reactfy.vercel.app/',
  },
  {
    num: '03',
    categoty: 'Next.js Applications',
    title: 'Quotes App',
    discription: `A quote management application built with Next.js and TypeScript. 
Users can search, add, edit, and delete quotes through a REST API. 
The UI is styled with Tailwind CSS and ShadCN UI, with error handling via React Toastify. 
Unit tests are implemented using Jest, ensuring reliability and maintainability.`,
    stack: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'ShadCN UI' },
      { name: 'REST API' },
      { name: 'Jest' },
      { name: 'React Toastify' },
      { name: 'Clean Architecture' },
      { name: 'DRY' },
    ],
    image: '/assets/work/quotes.png',
    github: 'https://github.com/admitruk237/Quotes-app',
    live: '',
  },
  {
    num: '04',
    categoty: 'React Applications',
    title: 'Get Task Driver',
    discription: `A Trello-like task management app built with React, TypeScript, and Redux. 
Users can create lists, add tasks, set deadlines, mark completion, and manage multiple boards. 
The UI uses Material UI and Framer Motion for smooth interactions. 
Authentication is handled with JWT, with unit tests and Storybook snapshots for quality assurance.`,
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
    discription: `An online book library application with search and filtering functionality. 
It was first built with classic Redux and later refactored to Redux Toolkit for better structure. 
The backend is a simple Express server, with Axios handling data requests and Toastify showing notifications. 
This project demonstrates both legacy and modern state management approaches.`,
    stack: [
      { name: 'React' },
      { name: 'Redux' },
      { name: 'Redux Toolkit' },
      { name: 'JavaScript' },
      { name: 'Express' },
      { name: 'Axios' },
      { name: 'Toastify' },
      { name: 'Node.js' },
      { name: 'REST API' },
      { name: 'Redux Toolkit Thunks' },
    ],
    image: '/assets/work/library.png',
    github: 'https://github.com/admitruk237/Book-Library-App',
    live: '',
  },
  {
    num: '06',
    categoty: 'E-commerce & Collaborative',
    title: 'Shop store',
    discription: `A collaborative e-commerce jewelry shop built entirely with HTML, CSS, and JavaScript. 
The project includes a fully custom shopping cart powered by LocalStorage and responsive UI elements. 
I contributed to UI implementation, form handling, and planning of app structure. 
It demonstrates teamwork, GitHub collaboration, and development without frameworks.`,
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'Javascritp' },
      { name: 'LocalStorage' },
      { name: 'Team Project' },
      { name: 'GitHub' },
      { name: 'Gulp' },
      { name: 'BEM' },
      { name: 'Sass' },
    ],
    image: '/assets/work/shopStore.png',
    github: 'https://github.com/admitruk237/ShoppeStore',
    live: 'https://shoppestore.netlify.app/',
  },
  {
    num: '07',
    categoty: 'Landing Pages & Simple Websites',
    title: 'Home Pro',
    discription: `A responsive landing page for a home service company designed in Figma. 
It includes scroll-triggered animations, a content slider, and an accordion component. 
Built with HTML, CSS, and JavaScript, styled using BEM methodology. 
This project highlights clean responsive layout and interactive UI development.`,
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'Javascritp' },
      { name: 'Responsive Design' },
      { name: 'BEM' },
      { name: 'Figma' },
      { name: 'Accordion Component' },
      { name: 'Smooth Navigation' },
    ],
    image: '/assets/work/homePro.png',
    github: 'https://github.com/admitruk237/Home-Pro',
    live: 'https://admitruk237.github.io/Home-Pro/',
  },
  {
    num: '08',
    categoty: 'Landing Pages & Simple Websites',
    title: 'Farm Vest',
    discription: `A responsive landing page showcasing agricultural investment opportunities. 
It features engaging animations, parallax effects, and a modern UI design. 
Developed with HTML, CSS, Sass, and JavaScript, styled with BEM methodology. 
The project demonstrates smooth interactions and attention to visual details.`,
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'Sass' },
      { name: 'BEM' },
      { name: 'Javascritp' },
      { name: 'Responsive Design' },
      { name: 'Animations' },
      { name: 'Parallax Effects' },
      { name: 'Figma' },
    ],
    image: '/assets/work/farm.png',
    github: 'https://github.com/admitruk237/Farm-Vest',
    live: 'https://admitruk237.github.io/Farm-Vest/',
  },
  {
    num: '09',
    categoty: 'Landing Pages & Simple Websites',
    title: 'GoCorona ',
    discription: `A health awareness landing page with a responsive design and modern layout. 
It includes animations, smooth navigation, and interactive elements for user engagement. 
The project was built with HTML, CSS, Sass, and JavaScript, structured with BEM and automated using Gulp. 
It demonstrates solid knowledge of UI design and frontend fundamentals.`,
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'Javascritp' },
      { name: 'Sass' },
      { name: 'BEM' },
      { name: 'Gulp' },
      { name: 'Responsive Design' },
      { name: 'Figma' },
    ],
    image: '/assets/work/corona.png',
    github: 'https://github.com/admitruk237/GoCorona',
    live: 'https://go-corona-umber.vercel.app/',
  },
  {
    num: '10',
    categoty: 'Landing Pages & Simple Websites',
    title: 'Finance',
    discription: `A financial services landing page with a professional and minimal UI design. 
It features responsive layout, smooth navigation, and clean visual presentation. 
Built with HTML, CSS, Sass, and JavaScript, styled using BEM methodology and designed in Figma. 
The project emphasizes detail-oriented design and polished frontend delivery.`,
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'Javascritp' },
      { name: 'Sass' },
      { name: 'BEM' },
      { name: 'Responsive Design' },
      { name: 'Figma' },
    ],
    image: '/assets/work/finance.png',
    github: 'https://github.com/admitruk237/Finance-site',
    live: 'https://admitruk237.github.io/Finance-site/',
  },
];

export { projects };
export default projects;
