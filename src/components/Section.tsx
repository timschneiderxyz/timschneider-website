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
    <section id={id} className='py-10 lg:py-16'>
      <div className='container'>{children}</div>
    </section>
  );
};

export default Section;
