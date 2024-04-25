/*  ========================================================================
    # Components - Section
    ========================================================================  */

import clsx from 'clsx';

const Section = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <section className={clsx('relative py-12', className)} {...props} />;
};

export default Section;
