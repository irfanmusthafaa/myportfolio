import { FRONTEND_SKILLS } from './tech-skills';

import imgRoamer from '../assets/images/img-work-roamer.png';
import imgMarket from '../assets/images/img-work-landscape.png';
import imgEvent from '../assets/images/img-work-event.png';
import imgTopApps from '../assets/images/img-work-topapps.png';
import imgBig from '../assets/images/img-work-big.png';
import imgMeasurement from '../assets/images/img-work-measurement.png';

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: imgRoamer,
    title: 'International Roamer',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React JS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Ant Design'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind'),
      getSkillByLabel(FRONTEND_SKILLS, 'Mapbox GL'),
      getSkillByLabel(FRONTEND_SKILLS, 'ECharts'),
      getSkillByLabel(FRONTEND_SKILLS, 'Web Socket'),
    ],
    description: `A comprehensive analytics dashboard for tracking International Roamer activities, focusing on detailed insights for both Inbound and Outbound roamers to optimize roaming services.`,
    repoLink: '',
    sourceLink: 'https://sewahotel-irfandev.vercel.app/',
  },
  {
    imgSrc: imgEvent,
    title: 'Event Dashboard',
    techIcons: [
       getSkillByLabel(FRONTEND_SKILLS, 'React JS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Ant Design'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind'),
      getSkillByLabel(FRONTEND_SKILLS, 'Mapbox GL'),
      getSkillByLabel(FRONTEND_SKILLS, 'ECharts'),
    ],
    description: `Real-time monitoring dashboard designed for major seasonal events, specifically NARU (Natal & Tahun Baru) and RAFI (Ramadan & Idul Fitri), providing critical insights during peak traffic periods.`,
    repoLink: '',
    sourceLink: 'https://startup-website-irfandev.vercel.app/',
  },
  {
    imgSrc: imgTopApps,
    title: 'Top Apps Dashboard',
    techIcons: [
     getSkillByLabel(FRONTEND_SKILLS, 'React JS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Ant Design'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind'),
      getSkillByLabel(FRONTEND_SKILLS, 'ECharts'),
    ],
    description: `A data-driven dashboard that monitors and analyzes the performance of top-tier applications, helping businesses understand user engagement and market trends.`,
    repoLink: 'https://github.com/irfanmusthafaa/final_chapter_team02',
    // sourceLink: 'https://tech-academy-v2.vercel.app/',
    sourceLink: '',
  },
  {
    imgSrc: imgBig,
    title: 'Business Intelligence & Growth',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React JS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Ant Design'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind'),
      getSkillByLabel(FRONTEND_SKILLS, 'Mapbox GL'),
      getSkillByLabel(FRONTEND_SKILLS, 'ECharts'),
    ],
    description: `Strategic BI platform focused on driving business growth through advanced data visualization, trend analysis, and actionable business insights.`,
    repoLink: 'https://github.com/irfanmusthafaa/psb_ytc_nextjs',
    sourceLink: '',
  },
  {
    imgSrc: imgMarket,
    title: 'Market Landscape',
    techIcons: [
    getSkillByLabel(FRONTEND_SKILLS, 'React JS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Ant Design'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind'),
      getSkillByLabel(FRONTEND_SKILLS, 'Mapbox GL'),
      getSkillByLabel(FRONTEND_SKILLS, 'ECharts'),
    ],
    description: `A deep-dive analytical tool for mapping and monitoring the market landscape, enabling competitive analysis and strategic positioning within the industry.`,
    repoLink: '',
    sourceLink: 'https://drive.google.com/file/d/1WpJv_s1Odj1FEQxmnyJIqtYnRbh2tdLf/view?usp=sharing',
  },
  // {
  //   imgSrc: imgAlert,
  //   title: 'Alert Management',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'React JS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Ant Design'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Tailwind'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'ECharts'),
  //   ],
  //   description: `Centralized alert monitoring system that integrates and displays critical alerts previously sent via email, providing a unified view for rapid response and management.`,
  //   repoLink: 'https://github.com/irfanmusthafaa/movie-with-redux',
  //   sourceLink: 'https://movie-box-c6.vercel.app/',
  // },
  {
    imgSrc: imgMeasurement,
    title: 'Campaign Dashboard',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React JS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Ant Design'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind'),
      getSkillByLabel(FRONTEND_SKILLS, 'ECharts'),
    ],
    description: `Performance tracking dashboard for marketing campaigns, providing real-time data on campaign volume and revenue generated during specific periods.`,
    repoLink: 'https://github.com/irfanmusthafaa/todo-list',
    sourceLink: 'https://todo-list-improject.vercel.app/',
  },
  // {
  //   imgSrc: 'https://images2.imgbox.com/27/cb/g2K3ZDci_o.png',
  //   title: 'StoreGG - Website Top Up Voucher Game',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Next JS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'REST Api'),
  //   ],
  //   description: `Game Voucher Top Up Website Project (Frontend)`,
  //   repoLink: 'https://github.com/irfanmusthafaa/fe-storegg',
  //   sourceLink: '',
  // },
  // {
  //   imgSrc: 'https://images2.imgbox.com/b3/50/nW8iNqmM_o.png',
  //   title: 'Staycation - Website Travel (Frontend)',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'React JS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'React Redux'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'REST Api'),
  //   ],
  //   description: `This project is for a user page for a staycation website project`,
  //   repoLink: 'https://github.com/irfanmusthafaa/bwamern_',
  //   sourceLink: '',
  // },
  
];
