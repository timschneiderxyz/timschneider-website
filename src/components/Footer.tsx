/*  ========================================================================
    # Components - Footer
    ========================================================================  */

// Dependencies
import React, { useState } from 'react';

// Components
import Modal from '@components/Modal';

// Assets
import IconGitHub from '@assets/images/svg/social/github.svg';
import IconTwitter from '@assets/images/svg/social/twitter.svg';
import IconXing from '@assets/images/svg/social/xing.svg';

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <footer>
      <div className='container flex justify-between py-10'>
        <span
          className='text-sm cursor-pointer transition-colors hover:text-white'
          onClick={() => setModalIsOpen(true)}
        >
          © 2022 Tim Schneider
        </span>

        <div className='flex gap-8'>
          <a
            className='group'
            href='https://github.com/timschneiderxyz'
            aria-label='link to github'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconGitHub className='w-5 h-5 fill-white transition-colors group-hover:fill-[#9f7be1]' />
          </a>
          <a
            className='group'
            href='https://twitter.com/timschneiderxyz'
            aria-label='link to twitter'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconTwitter className='w-5 h-5 fill-white transition-colors group-hover:fill-[#1d9bf0]' />
          </a>
          <a
            className='group'
            href='https://www.xing.com/profile/tim_schneider328'
            aria-label='link to xing'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconXing className='w-5 h-5 fill-white transition-colors group-hover:fill-[#0698a0]' />
          </a>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        Greetings! 👋
      </Modal>
    </footer>
  );
};

export default Footer;
