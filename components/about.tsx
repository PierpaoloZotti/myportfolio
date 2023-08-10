'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/section-heading';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
export default function About() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('About');
    }
  }, [inView, setActiveSection]);

  return (
    <section
      className='max-w-[47rem] text-center my-14 sm:my-20'
      ref={ref}
    >
      <motion.div
        className='px-4 text-sm font-medium !leading-[1.5] scroll-mt-28'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, ease: 'easeIn' }}
        id='about'
      >
        <SectionHeading title='About Me' />
        <p>
          Formed in Electronic and Telecomunication a long time ago, I enrolled
          in a governament course about <strong>PLC</strong> programming with a
          total duration of more than <i>1200 hours</i>. After that I served my
          nation and when I backed to home I was hired as logistic leader by a
          great company from Milan. For life's jokes I never returned to my
          original passion and I continued in the logistic area, changing only
          the employers. So I passed from Danzas to <strong>DHL</strong>,{' '}
          <strong>Toyota</strong> and so on. In 2012 I moved to Rio de Janeiro
          with my family and I started work as freelancer as electrician. In the
          meanwhile I decided to pursue my passion for programming and I
          enrolled in some IT courses. My favorite part of programming is the
          problem-solving aspect. I love the fealing of finally figuring out a
          solution to a problem. My core stack is <strong>React</strong>,{' '}
          <strong>Next.js</strong>, <strong>Node.js</strong> and
          <strong>MongoDB</strong>. But I'm familiar with{' '}
          <em>Typescript, Prisma, Figma </em>
          and I am looking to learn new technologies.
        </p>
      </motion.div>
    </section>
  );
}
