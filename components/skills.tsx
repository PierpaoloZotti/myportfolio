'use client';
import { skillsData } from '@/lib/data';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.2);
  return (
    <section
      ref={ref}
      id='skills'
      className='my-14 sm:my-20 max-w-[45rem] scroll-mt-28'
    >
      <SectionHeading title='My Skills' />
      <ul className='flex flex-wrap items-center justify-center gap-x-4 gap-y-6'>
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className='py-2 px-4 border-black/10 bg-gray-200 rounded-full'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
