/*  ========================================================================
    # Components - Header
    ========================================================================  */

// Components
import Link from 'next/link';

// SVGs
import Logo from '@/svgs/logo.svg';

const Header = () => {
  return (
    <header>
      <div className='container flex justify-between py-10'>
        <Link className='flex items-center' href='/' title='Link to Home' aria-label='Link to Home'>
          <Logo className='w-8 h-8 mr-3 fill-tim-primary' />
          <strong className='text-white'>Tim Schneider</strong>
        </Link>
      </div>
    </header>
  );
};

export default Header;
