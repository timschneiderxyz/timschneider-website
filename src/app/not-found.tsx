/*  ========================================================================
    # Not Found
    ========================================================================  */

import Container from '@/components/Container';
import Image from 'next/image';
import schmuserkadser from '@/images/schmuserkadser.png';

const NotFound = () => {
  return (
    <main className='w-full min-h-[calc(100vh-220px)] flex justify-center items-center py-12'>
      <Container>
        <h1 className='text-center'>
          404
          <hr className='w-10 my-2 mx-auto border-neutral-600' />
          Page not found
        </h1>
        <figure className='max-w-xs mt-10 mx-auto'>
          <Image
            className='w-full h-full'
            src={schmuserkadser}
            alt='A picture of Schmuserkadser.'
            placeholder='blur'
          />
        </figure>
      </Container>
    </main>
  );
};

export default NotFound;
