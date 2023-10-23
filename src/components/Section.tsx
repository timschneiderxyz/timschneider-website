/*  ========================================================================
    # Components - Section
    ========================================================================  */

// Dependencies
import { forwardRef } from 'react';
import clsx from 'clsx';

const Section = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <section ref={ref} className={clsx('relative py-16 lg:py-20', className)} {...props} />;
  }
);
Section.displayName = 'Section';

export default Section;
