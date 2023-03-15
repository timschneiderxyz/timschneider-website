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
        <div className='text-center'>
          <h1 className='mb-4'>404</h1>
          <p>Page not found.</p>
        </div>
      </Section>
    </main>
  );
};

export default FourOhFour;
