/*  ========================================================================
    # Components - Footer
    ========================================================================  */

'use client';

import { useModalStore } from '@/stores/modal';
import Container from '@/components/Container';
import Modal from '@/components/Modal';
import IconGitHub from '@/svgs/social/github.svg';
import IconX from '@/svgs/social/x.svg';

const Footer = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { open: openModal } = useModalStore();

  return (
    <footer {...props}>
      <Container>
        <div className='flex justify-between py-10'>
          <button
            className='p-0 bg-transparent border-none text-sm cursor-pointer transition-colors hover:text-white'
            onClick={() => openModal('Greetings! 👋')}
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
              <span className='sr-only'>GitHub</span>
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
              <span className='sr-only'>X</span>
              <IconX className='w-5 h-5 fill-white transition-colors group-hover:fill-[#1d9bf0]' />
            </a>
          </div>
        </div>
      </Container>

      <Modal />
    </footer>
  );
};

export default Footer;
