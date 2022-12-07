/*  ========================================================================
    # Components - Section
    ========================================================================  */

// Dependencies
import React from 'react';

// Types
interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
  return (
    <section id={id} className='relative py-16 lg:py-20'>
      <div className='container'>{children}</div>
    </section>
  );
};

export default Section;
