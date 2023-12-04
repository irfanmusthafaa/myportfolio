import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://images2.imgbox.com/62/fb/bvVuqK21_o.png',
    title: 'Movie Box - Watch and Search For Online Movie Lists',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description: `Explore various movie lists online, enjoy exclusive trailers, and find recommendations tailored to your preferences. It is build with React Js, Tailwind, Redux, oAuth.`,
    repoLink: 'https://github.com/irfanmusthafaa/movie-with-redux',
    sourceLink: 'https://movie-box-c6.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/25/52/BRBiurAm_o.png',
    title: 'Todo List - Efficient Task Management',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
    ],
    description: `Organize, Prioritize, and Conquer your task with Todo List Website ! Its build with React Js, Tailwind`,
    repoLink: 'https://github.com/irfanmusthafaa/todo-list',
    sourceLink: 'https://todo-list-improject.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/9a/99/kqwtfUDq_o.png',
    title: 'Servofeat.com - Restaurant POS Systems',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
    ],
    description: `A smart restaurant system proving billing management, kitchen management, QR Orders, Order settlement etc. `,
    repoLink: '',
    sourceLink: 'https://www.servofeat.com',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/ad/94/w5IP0ZQz_o.png',
    title: 'Acteria.com - Security Compliance Tool',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
    ],
    description: `Unified Regulations Simplified Compliance tool. Acteria Strengthens the Governance Over Regulations, And Helps Organizations Achieve Compliance Easily.`,
    repoLink: '',
    sourceLink: 'https://acteria.com',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/79/5f/S3hu6kJs_o.jpg',
    title: 'Flipkart Clone - E-Commerce Project',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
    ],
    description:
      'Flipkart Clone is done with top-notch features for the entrepreneur startups like Flipkart. It is build with React Js, Node Js.',
    repoLink: 'https://github.com/dhavalCode/flipkart-clone',
    sourceLink: 'https://flipkart-web.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://images2.imgbox.com/b5/bb/6f5g9QBE_o.png',
    title: 'Developer Portfolio',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
    ],
    description:
      'Simple and classic modern portfolio for who wants to present himself as a software developer. Portfolio build with highly customizable using Tailwind CSS, Next Js.',
    repoLink: 'https://github.com/dhavalCode/dev-portfolio',
    sourceLink: 'https://dhavalcode.com/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://images2.imgbox.com/dd/a3/Fcx8cjEr_o.jpg',
    title: 'Kitchen Store  - E-Commerce',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      {
        label: 'Java',
        icon: 'logos:java',
      },
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
    ],
    description:
      'The e-commerce to buy kitchen related items. College final year project base on Servlets and JSP (Java)',
    repoLink: 'https://github.com/dhavalcode/ecommerce-java-project',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc: 'https://images2.imgbox.com/9d/d0/zdDVFtFN_o.png',
    title: 'Netflix Clone - TMDB API Project',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description: 'Netflix clone using react Js. Proving movies details using TMDB API.',
    repoLink: 'https://github.com/dhavalcode/netflix-clone',
    sourceLink: 'https://netflix-clone-by-dhaval.web.app/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
];
