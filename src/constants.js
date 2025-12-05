// Skills Section Logos
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactLogo from './assets/tech_logo/reactjs.png';
import pythonLogo from './assets/tech_logo/python.png';
import cLogo from './assets/tech_logo/c.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import tailwindLogo from './assets/tech_logo/tailwindcss.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Additional tech logos
import djangoLogo from './assets/tech_logo/django logo.png';
import dotnetLogo from './assets/tech_logo/.net logo.png';
import unityLogo from './assets/tech_logo/unity logo.png';
import visualStudioLogo from './assets/tech_logo/visual studio logo.png';
import sqliteLogo from './assets/tech_logo/sqlite log.jpeg';
import timeManagementLogo from './assets/tech_logo/time_management.png';
import problemSolvingLogo from './assets/tech_logo/problem_solving.png';
import teamworkLogo from './assets/tech_logo/teamwork.png';

// Company logos for experiences
import webverseLogo from './assets/tech_logo/education_logo/gla_logo.png';
import agcLogo from './assets/tech_logo/education_logo/bsa_logo.png';
import newtonschoolLogo from './assets/tech_logo/education_logo/vps_logo.png';

// Company logos
import microItLogo from './assets/company_logo/micro_it.png';

// Education logos
import sdsmLogo from './assets/education_logo/sdsm.png';
import stjLogo from './assets/education_logo/st.j.jpeg';
import tvmLogo from './assets/education_logo/tvm.png';

// Project logos
import edumateLogo from './assets/work_logo/edumate.png';
import calculatorLogo from './assets/work_logo/calculator.png';
import whatsappApiLogo from './assets/work_logo/whatsapp api.png';
import advocateAiLogo from './assets/work_logo/advocate ai.png';
import truthBotLogo from './assets/work_logo/truthbot.png';

export const SkillsInfo = [
  {
    title: 'Programming & Development',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'C', logo: cLogo },
      { name: 'C#', logo: csharpLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Django', logo: djangoLogo },
      { name: '.NET Framework', logo: dotnetLogo },
      { name: 'Unity 3D', logo: unityLogo },
      { name: 'React.js', logo: reactLogo },
      { name: 'Tailwind CSS', logo: tailwindLogo },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Visual Studio', logo: visualStudioLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
  {
    title: 'Database & Others',
    skills: [
      { name: 'SQLite', logo: sqliteLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: microItLogo,
    role: 'Full-stack Developer Intern',
    company: 'Micro Information Technology Services',
    location: 'Mumbai · Remote',
    date: 'May 2025 - Jun 2025',
    desc: 'Delivered responsive UI screens powered by HTML, CSS, JavaScript, and Tailwind CSS while integrating REST APIs for live business data.',
    achievements: [
      'Implemented dashboards that reduced manual reporting time by 40%',
      'Set up Git/GitHub workflows to streamline daily code reviews',
    ],
    skills: [
      'React',
      'REST APIs',
      'Tailwind CSS',
      'Git & GitHub',
    ],
  },
];

export const education = [
  {
    id: 0,
    img:  stjLogo,
    school: 'St.John College of engineering  and management',
    date: 'Aug 2023 – May 2027',
    grade: 'CGPA: 9.60',
    desc: 'B.Tech in Computer Science focusing on web engineering, data structures, and immersive UI/UX workflows.',
    degree: 'Bachelor of Technology - Computer Science',
  },
  {
    id: 1,
    img: sdsmLogo,
    school: 'SDSM College',
    date: 'Apr 2022 – Mar 2023',
    grade: '69%',
    desc: 'Higher Secondary (Science) with emphasis on mathematics, physics, and computer fundamentals.',
    degree: 'HSC - Science',
  },
  {
    id: 2,
    img: tvmLogo,
    school: 'Thakur Vidya Mandir High School',
    date: 'Apr 2020 – Mar 2021',
    grade: '79%',
    desc: 'SSC coursework with early exposure to programming logic and computer applications.',
    degree: 'SSC - Science & Computer Applications',
  },
];

export const projects = [
  {
    id: 0,
    title: 'EduMate – Interactive Educational Platform',
    description:
      'A personalized learning companion that uses Flask, OpenAI APIs, and slick animations to deliver AI-powered explanations, progress tracking, and student engagement insights.',
    image: edumateLogo,
    tags: ['Flask', 'OpenAI API', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mahek-gupta/edumate',
    webapp: 'https://edumate.mahekgupta.dev',
  },
  {
    id: 1,
    title: 'Calculator for Micro-IT',
    description:
      'A responsive calculator tailored for daily finance ops at Micro ITS with theme switching, keyboard shortcuts, and precision rounding logic.',
    image: calculatorLogo,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mahek-gupta/microit-calculator',
    webapp: 'https://microit-calculator.netlify.app',
  },
  {
    id: 2,
    title: 'WhatsApp Order Status & Product API',
    description:
      'C#/.NET Web API that powers WhatsApp-based product lookups and order tracking with secure REST endpoints and Postman documentation.',
    image: whatsappApiLogo,
    tags: ['C#', 'ASP.NET Web API', 'REST', 'Postman'],
    github: 'https://github.com/mahek-gupta/whatsapp-order-api',
    webapp: 'https://documenter.getpostman.com/view/demo-whatsapp-api',
  },
  {
    id: 3,
    title: 'Personal Advocate AI System',
    description:
      'An AI assistant that routes user queries to curated legal/advocacy datasets with secure auth, dashboards, and OpenAI-driven responses.',
    image: advocateAiLogo,
    tags: ['Flask', 'OpenAI', 'React', 'Tailwind'],
    github: 'https://github.com/mahek-gupta/advocate-ai',
    webapp: 'https://advocate-ai.mahekgupta.dev',
  },
  {
    id: 4,
title: 'TruthBot – AI Fact-Checking Assistant',
description:
  'An AI-powered misinformation detection and verification system built with Flask and React. TruthBot analyzes text, images, and links, extracts factual claims, and verifies them using trusted global sources. It delivers confidence-scored fact checks, multilingual support, and a clean conversational UI.',
image: truthBotLogo,
tags: ['Flask', 'React', 'OpenAI', 'NLP', 'Fact-Checking'],
github: 'https://github.com/mahek-gupta/truthbot',
webapp: 'https://truthbot.mahekgupta.dev',

  },
];