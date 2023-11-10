/*  ========================================================================
    # Components - Header
    ========================================================================  */

// Components
import Container from '@/components/Container';
import Link from 'next/link';

// SVGs
import Logo from '@/svgs/logo.svg';

const Header = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header {...props}>
      <Container>
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
      </Container>
    </header>
  );
};

export default Header;
