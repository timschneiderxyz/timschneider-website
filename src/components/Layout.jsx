/*  ========================================================================
    # Components - Layout
    ========================================================================  */

// Dependencies
import React from 'react';

// Components
import Header from '@components/Header';
import Footer from '@components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
