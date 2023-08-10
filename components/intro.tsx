'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
export default function Intro() {
  const { ref } = useSectionInView('Home', 0.4);

  return (
    <section
      className='my-14 max-w-[50rem] text-center scroll-mt-44 sm:my-20'
      id='home'
      ref={ref}
    >
      <div className='flex items-center justify-center'>
        <motion.div
          className='relative w-[8rem] h-[8rem] rounded-full overflow-hidden border-4 border-white shadow-xl'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'tween', duration: 0.3, delay: 0.1 }}
        >
          <Image
            src='/paolo.png'
            alt='profile image'
            fill
            priority={true}
            className='object-cover bg-gray-500 '
          />
        </motion.div>
      </div>
      <motion.p
        className='mb-10 mt-4 px-4 text-2xl text-center font-medium !leading-[1.5]  '
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, ease: 'easeIn' }}
      >
        Hello, I'm <span className='font-bold'>Pierpaolo</span> and I'm a
        full-stack developer. I enjoy building{' '}
        <span className='italic'>sites and apps</span>. My focus is{' '}
        <span className='font-semibold underline'>React (Next.js)</span> and{' '}
        <span className='font-semibold underline'>UI design with Figma</span>
      </motion.p>
      <motion.div
        className='w-full flex flex-col gap-2 gap-y-4 items-center justify-center sm:flex-row'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: 'easeIn' }}
      >
        <Link
          href='#contact'
          className='group flex w-[11.5rem] items-center justify-center gap-x-2 bg-gray-950 rounded-full py-2 px-4 text-gray-50  shadow-md hover:scale-105 transition hover:shadow-xl'
        >
          Contact me here{' '}
          <BsArrowRight className='group-hover:translate-x-2 transition duration-200' />
        </Link>
        <a
          className='flex w-[11.5rem] items-center justify-center gap-x-2 bg-gray-50 text-gray-950 rounded-full py-2 shadow-md hover:scale-105 transition hover:shadow-xl cursor-pointer'
          href='/CV.pdf'
          download='CV Pierpaolo Zotti'
        >
          Download CV <HiDownload />
        </a>
        <div className='flex items-center gap-x-2 '>
          <Link
            href='https://github.com/PierpaoloZotti'
            target='_blank'
          >
            <FaGithub className='w-10 h-10 drop-shadow-md hover:scale-[1.15] transition hover:drop-shadow-xl' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/pierpaolo-zotti-rj'
            target='_blank'
          >
            <FaLinkedin className='w-10 h-10  drop-shadow-md hover:scale-[1.15] transition hover:drop-shadow-xl' />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
