/*  ========================================================================
    # Components - Footer
    ========================================================================  */

'use client';

// Dependencies
import { useState } from 'react';

// Components
import Modal from '@/components/Modal';

// SVGs
import IconGitHub from '@/svgs/social/github.svg';
import IconX from '@/svgs/social/x.svg';

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <footer>
      <div className='container flex justify-between py-10'>
        <button
          className='p-0 bg-transparent border-none text-sm cursor-pointer transition-colors hover:text-white'
          onClick={() => setModalIsOpen(true)}
        >
          © 2022 Tim Schneider
        </button>

        <div className='flex gap-8'>
          <a
            className='group'
            href='https://github.com/timschneiderxyz'
            title='Link to GitHub Profile'
            aria-label='Link to GitHub Profile'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconGitHub className='w-5 h-5 fill-white transition-colors group-hover:fill-[#9f7be1]' />
          </a>
          <a
            className='group'
            href='https://x.com/timschneiderxyz'
            title='Link to X Profile'
            aria-label='Link to X Profile'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconX className='w-5 h-5 fill-white transition-colors group-hover:fill-[#1d9bf0]' />
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
