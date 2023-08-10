'use client';

import { easeIn, motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      className='bg-gray-100/20 my-16 h-12 w-2 border border-gray-950/10 drop-shadow-lg shadow-black rounded-full hidden sm:block'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, ease: 'easeIn' }}
    ></motion.div>
  );
}
