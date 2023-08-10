'use client';
import React, { useEffect } from 'react';

import { projectsData } from '@/lib/data';
import SectionHeading from '@/components/section-heading';
import Project from '@/components/project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.2);
  return (
    <section
      className='my-14 sm:my-20  scroll-mt-28'
      id='projects'
      ref={ref}
    >
      <SectionHeading title='My Projects' />
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}

// I may be more precise in this way
