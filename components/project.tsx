'use client';

import { useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { motion } from 'framer-motion';

import { projectsData } from '@/lib/data';
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubRepo,
  liveDemo,
}: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleTransform,
        opacity: opacityTransform,
      }}
      className='group relative bg-gray-200/30 max-w-[42rem] mb-4 sm:mb-10  border border-gray-950/5 rounded-lg shadow-md overflow-hidden sm:pr-8 sm:h-[20rem] even:pl-8'
    >
      <div className='pt-4 px-5 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='text-sm'>{description}</p>
        <ul className='flex flex-wrap gap-2 sm:mt-auto '>
          {tags.map((tag, index) => (
            <li
              key={index}
              className='py-1 px-4  bg-gray-200 border border-gray-950/10 rounded-full text-[0.7rem] uppercase tracking-wider'
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className='absolute -top-4 flex items-center justify-center gap-4'>
          <Link
            href={githubRepo}
            className='text-sm font-semibold rounded-full px-4 py-1  text-slate-500 mt-4    hover:text-slate-950 transition'
          >
            Github repo
          </Link>
          {liveDemo !== '' && (
            <Link
              href={liveDemo}
              className='text-sm font-semibold rounded-full px-4  text-slate-500 mt-4   hover:text-slate-950 transition'
            >
              Live demo
            </Link>
          )}
        </div>
      </div>

      <Image
        src={imageUrl}
        alt='project image'
        quality={95}
        className='absolute top-8 -right-44 w-[30.5rem] rounded-lg shadow-2xl transition duration-200
        
        group-even:right-[initial] 
        group-even:-left-44 
        
        group-hover:-rotate-[3deg] 
        group-hover:scale-105
        group-hover:translate-x-2 
        group-hover:translate-y-2 
        
        group-even:group-hover:rotate-[3deg]
        group-even:group-hover:-translate-x-2 
        group-even:group-hover:translate-y-2 
        '
      />
    </motion.section>
  );
}
