/*  ========================================================================
    # Components - Header
    ========================================================================  */

// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import Logo from '@assets/logo.svg';

const Header = () => {
  return (
    <header>
      <div className='container flex justify-between py-10'>
        <Link className='flex items-center' to='/' title='Link to Home' aria-label='Link to Home'>
          <Logo className='w-8 h-8 mr-3 fill-tim-primary' />
          <strong className='text-white'>Tim Schneider</strong>
        </Link>
      </div>
    </header>
  );
};

export default Header;
