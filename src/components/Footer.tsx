/*  ========================================================================
    # Components - Footer
    ========================================================================  */

// Dependencies
import React from 'react';

// SVGs
import GitHub from '@assets/images/svg/social/github.svg';
import Twitter from '@assets/images/svg/social/twitter.svg';
import Xing from '@assets/images/svg/social/xing.svg';

const Footer = () => {
  return (
    <footer className='c-footer'>
      <div className='container flex justify-between w-[90%] mx-auto py-10'>
        <span className='text-sm font-bold'>© 2022 Tim Schneider</span>

        <div className='flex gap-8'>
          <a
            className='group'
            href='https://github.com/RanzigeButter'
            aria-label='link to github'
            target='_blank'
            rel='noreferrer noopener'
          >
            <GitHub className='w-5 h-5 fill-white group-hover:fill-[#9f7be1] transition-colors' />
          </a>
          <a
            className='group'
            href='https://twitter.com/ranzigebutter'
            aria-label='link to twitter'
            target='_blank'
            rel='noreferrer noopener'
          >
            <Twitter className='w-5 h-5 fill-white group-hover:fill-[#1d9bf0] transition-colors' />
          </a>
          <a
            className='group'
            href='https://www.xing.com/profile/Tim_Schneider328'
            aria-label='link to xing'
            target='_blank'
            rel='noreferrer noopener'
          >
            <Xing className='w-5 h-5 fill-white group-hover:fill-[#0698a0] transition-colors' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
