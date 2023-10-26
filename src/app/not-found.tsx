/*  ========================================================================
    # Not Found
    ========================================================================  */

// Components
import Section from '@/components/Section';
import Image from 'next/image';

// Images
import schmuserkadser from '@/images/schmuserkadser.png';

const NotFound = () => {
  return (
    <main>
      <Section id='four-oh-four' className='flex justify-center items-center w-full min-h-screen'>
        <div className='container'>
          <h1 className='text-center'>Page not found</h1>
          <figure className='max-w-xs mt-16 mx-auto'>
            <Image
              className='w-full h-full'
              src={schmuserkadser}
              alt='A picture of Schmuserkadser.'
              placeholder='blur'
            />
          </figure>
        </div>
      </Section>
    </main>
  );
};

export default NotFound;
