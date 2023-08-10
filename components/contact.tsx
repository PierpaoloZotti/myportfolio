'use client';

import { useSectionInView } from '@/lib/hooks';
import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from '@/components/submit-btn';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  return (
    <motion.section
      id='contact'
      className='my-14 sm:my-20 w-[min(100%, 38rem)] scroll-mt-28'
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading title='Contact Me' />
      <p className='-mt-8'>
        Please contact me directly at{' '}
        <a
          className='underline'
          href='mailto:zotti.pierpaolo@outlook.it'
        >
          zotti.pierpaolo@outlook.it
        </a>{' '}
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col gap-4'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully');
        }}
      >
        <input
          name='senderEmail'
          type='email'
          className='h-14 rounded-lg border border-black/10 outline-none px-4'
          placeholder='Your email'
          required
          maxLength={500}
        />
        <textarea
          name='message'
          className='rounded-lg border border-black/10 p-4 outline-none'
          rows={10}
          placeholder='Your message'
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
