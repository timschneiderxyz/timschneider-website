/*  ========================================================================
    # App
    ========================================================================  */

// Dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Layout from '@components/Layout';

// Pages
import Home from '@pages/Home';
import FourOhFour from '@pages/404';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<FourOhFour />} />
      </Route>
    </Routes>
  );
};

export default App;
