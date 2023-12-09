import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  // OPEN_SOURCE: 'open-source',
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
  // {
  //   label: 'Open Source',
  //   value: PROJECT_CATEGORY.OPEN_SOURCE,
  //   icon: 'fluent-mdl2:open-source',
  // },
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
    category: [PROJECT_CATEGORY],
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
    category: [PROJECT_CATEGORY],
  },
  {
    imgSrc: 'https://images2.imgbox.com/27/cb/g2K3ZDci_o.png',
    title: 'StoreGG - Website Top Up Voucher Game',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'REST Api'),
    ],
    description: `Game Voucher Top Up Website Project (Frontend)`,
    repoLink: 'https://github.com/irfanmusthafaa/fe-storegg',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/00/24/OW8cAA8e_o.png',
    title: 'StoreGG - Website Top Up Voucher Game',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Express.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Node.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Mongodb'),
      getSkillByLabel(FRONTEND_SKILLS, 'REST Api'),
    ],
    description: `This project is for an admin page and API server for a StoreGG website`,
    repoLink: 'https://github.com/irfanmusthafaa/server-storegg',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/b3/50/nW8iNqmM_o.png',
    title: 'Staycation - Website Travel (Frontend)',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(FRONTEND_SKILLS, 'REST Api'),
    ],
    description: `This project is for a user page for a staycation website project`,
    repoLink: 'https://github.com/irfanmusthafaa/bwamern_',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/4b/10/UYQuOPOQ_o.png',
    title: 'Staycation - Website Travel (Backend)',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Express.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Node.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Mongodb'),
      getSkillByLabel(FRONTEND_SKILLS, 'REST Api'),
    ],
    description: `This project is for an admin page and API server for a staycation website`,
    repoLink: 'https://github.com/irfanmusthafaa/backend-server-staycation',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
];
