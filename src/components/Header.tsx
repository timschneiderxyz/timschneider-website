/*  ========================================================================
    # Components - Header
    ========================================================================  */

// Dependencies
import { forwardRef } from 'react';

// Components
import Link from 'next/link';

// SVGs
import Logo from '@/svgs/logo.svg';

const Header = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => {
    return (
      <header ref={ref} {...props}>
        <div className='container'>
          <div className='flex justify-between py-10'>
            <Link
              className='flex items-center'
              href='/'
              title='Link to Home'
              aria-label='Link to Home'
            >
              <Logo className='w-8 h-8 mr-3 fill-[#f8484e]' />
              <strong className='text-lg text-white'>Tim Schneider</strong>
            </Link>
          </div>
        </div>
      </header>
    );
  }
);
Header.displayName = 'Header';

export default Header;
