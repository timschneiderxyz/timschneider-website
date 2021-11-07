/*  ========================================================================
    # Components - Layout
    ========================================================================  */

// Dependencies
import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Header from '@components/Header';
import Footer from '@components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
