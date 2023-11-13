/*  ========================================================================
    # Components - Header
    ========================================================================  */

// Components
import Container from '@/components/Container';
import Link from 'next/link';

const Header = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header {...props}>
      <Container>
        <div className='flex py-10'>
          <Link
            className='flex justify-center items-center w-10 h-10 border-2 border-solid border-white text-lg font-bold leading-none text-white select-none'
            href='/'
            title='Link to Home'
            aria-label='Link to Home'
          >
            TS
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
