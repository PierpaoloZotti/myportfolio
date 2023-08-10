import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import ecommerceImg from '@/public/ecommerce.png';
import airbnbImg from '@/public/airbnb_clone.png';
import driblleImg from '@/public/driblle_clone.png';
import socialImg from '@/public/social_media_app.png';
import { GiElectric } from 'react-icons/gi';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated F.Severi High School',
    location: 'Padua, Italy',
    description: 'Electronics and Telecommunications. I also studied English',
    icon: React.createElement(LuGraduationCap),
    date: '1996',
  },
  {
    title: 'PLC Programmer',
    location: 'Padua, Italy',
    description:
      'Course with one year duration and more than 1000 hours of lessons. I learned how to program PLCs and industrial robots. I also studied electronics and pneumatics.Internship at a leading company in the sector.',
    icon: React.createElement(LuGraduationCap),
    date: '1997 - 1999',
  },
  {
    title: 'Logistics Operator',
    location: 'Padua, Italy',
    description:
      'Backed by my experience as a PLC programmer, I worked as a logistics operator for a company that produces and sells industrials goods. I was in charge of the warehouse and the preparation of the expeditions for the customers. I also worked as a forklift operator and I was in charge of the maintenance of the machines.',
    icon: React.createElement(CgWorkAlt),
    date: '2000 - 2003',
  },
  {
    title: 'Warehouse Manager, DHL Supply Chain',
    location: 'Padua, Italy',
    description:
      'I lead a team of 6 people. I was in charge of the tech area of a warehouse and the preparation of the expeditions for the customers. I also act as a connection between the salesforce and the warehouse.  ',
    icon: React.createElement(CgWorkAlt),
    date: '2003 - 2005',
  },
  {
    title: 'Aftermarket Responsible, Toyota Ferri Auto',
    location: 'Padua, Italy',
    description:
      'I was in charge of the aftermarket area of a Toyota dealer. I was in charge of the warehouse and the preparation of the expeditions for the customers. To control the stock and the orders managing the reorder point and applying the 7 techniques of stockage developed by Toyota.',
    icon: React.createElement(CgWorkAlt),
    date: '2005 - 20010',
  },
  {
    title: 'Freelance, Eletrician',
    location: 'Rio de Janeiro, Brazil',
    description:
      'I worked as a freelance electrician. I was in charge of the electrical installation of mostly private houses.  I also worked as a plasterer and I was in charge of the construction of the ceiling of the house and in some cases of the automation.',
    icon: React.createElement(GiElectric),
    date: '2012 - present',
  },
  {
    title: 'Freelance, Web Developer',
    location: 'Rio de Janeiro, Brazil',
    description:
      'I worked as a freelance web developer for some little projects while enrolled in some courses of Google about UX/UI, Python and Data Analysis.',
    icon: React.createElement(FaReact),
    date: '2022 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'AirBnB clone',
    description:
      'Next.js app with a MongoDB database. It has features like filtering, sorting and pagination, date picker, map and more.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: airbnbImg,
    githubRepo: 'https://github.com/PierpaoloZotti/airbnb-clone',
    liveDemo: 'https://aluguel-de-temporada.vercel.app/',
  },
  {
    title: 'Social Media App',
    description: 'Social App with features like posts, comments, likes. ',
    tags: ['React', 'Express', 'Node.js', 'Redux'],
    imageUrl: socialImg,
    githubRepo: 'https://github.com/PierpaoloZotti/ZETA-GRAM',
    liveDemo: '',
  },
  {
    title: 'eCommerce',
    description:
      'E-commerce app with features like filtering, sorting and pagination, authorization, authentication, payments and more. Custom CMS for managing products, orders, billboards and so on.',
    tags: ['React', 'Next.js', 'Planetscale', 'Tailwind', 'Stripe'],
    imageUrl: ecommerceImg,
    githubRepo: 'https://github.com/PierpaoloZotti/ecommerce-Store',
    liveDemo: '',
  },
  {
    title: 'Driblle clone',
    description:
      'A clone of the Driblle website. It has features like filtering, sorting and pagination, authentication and more.',
    tags: ['React', 'Next.js', 'GraphQL', 'Tailwind'],
    imageUrl: driblleImg,
    githubRepo: 'https://github.com/PierpaoloZotti/grafbase_flexibble',
    liveDemo: 'https://grafbase-flexibble-self.vercel.app/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'GraphQL',
  'Express',
  'PostgreSQL',
  'Python',
  'Framer Motion',
] as const;
