/*  ========================================================================
    # Components - Section
    ========================================================================  */

import { forwardRef } from 'react';

const Section = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => {
    return <section ref={ref} className='relative py-16 lg:py-20' {...props} />;
  }
);
Section.displayName = 'Section';

export default Section;
