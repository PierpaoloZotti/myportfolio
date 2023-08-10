'use client';
import { experiencesData } from '@/lib/data';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  return (
    <section
      ref={ref}
      id='experience'
      className='my-14 sm:my-20 max-w-[55rem] scroll-mt-28'
    >
      <SectionHeading title='My Experience' />
      <VerticalTimeline lineColor=''>
        {experiencesData.map((experience, i) => (
          <React.Fragment key={i}>
            <VerticalTimelineElement
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 12px 0px',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{ borderRight: '0.4rem solid #9ca3af70' }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{ background: '#f3f4f6' }}
            >
              <h3 className='font-bold text-lg'>{experience.title}</h3>
              <p className='text-gray-950/50 !-mt-1'>{experience.location}</p>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
