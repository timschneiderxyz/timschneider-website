/*  ========================================================================
    # Components - Container
    ========================================================================  */

import clsx from 'clsx';

const Container = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={clsx('max-w-2xl w-11/12 mx-auto', className)} {...props} />;
};

export default Container;
