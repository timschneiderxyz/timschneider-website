/*  ========================================================================
    # Components - Header
    ========================================================================  */

// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import Logo from '@assets/images/svg/logo.svg';

const Header = () => {
  return (
    <header>
      <div className='container flex justify-between py-10'>
        <Link to='/' title='Link to Home' aria-label='Link to Home'>
          <Logo className='w-8 h-8 fill-tim-primary' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
