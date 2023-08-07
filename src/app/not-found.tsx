/*  ========================================================================
    # Not Found
    ========================================================================  */

// Components
import Section from '@/components/Section';
import Image from 'next/image';

const NotFound = () => {
  return (
    <main>
      <Section id='four-oh-four'>
        <h1 className='text-center'>Page not found</h1>
        <figure className='max-w-xs mt-16 mx-auto'>
          <Image
            className='w-full h-full'
            src='/images/schmuserkadser.png'
            width={350}
            height={267}
            alt='A picture of Schmuserkadser.'
          />
        </figure>
      </Section>
    </main>
  );
};

export default NotFound;
