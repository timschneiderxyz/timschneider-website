/*  ========================================================================
    # Pages - 404
    ========================================================================  */

// Dependencies
import React from 'react';

// Components
import Section from '@components/Section';

const FourOhFour = () => {
  return (
    <main>
      <Section id='four-oh-four'>
        <h1 className='text-center'>Page not found</h1>
        <figure className='max-w-xs mt-16 mx-auto'>
          <img
            className='w-full h-full'
            src='/images/misc/schmuserkadser.png'
            alt='A picture of Schmuserkadser.'
          />
        </figure>
      </Section>
    </main>
  );
};

export default FourOhFour;
