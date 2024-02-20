/*  ========================================================================
    # Components - Container
    ========================================================================  */

import { forwardRef } from 'react';
import clsx from 'clsx';

const Container = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={clsx('max-w-2xl w-11/12 mx-auto', className)} {...props} />;
  }
);
Container.displayName = 'Container';

export default Container;
