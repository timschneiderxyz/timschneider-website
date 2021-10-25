/*  ========================================================================
    # App
    ========================================================================  */

// Dependencies
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
const Home = lazy(() => import('@pages/Home'));
const FourOhFour = lazy(() => import('@pages/404'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='*' component={FourOhFour} />
        </Switch>
      </Suspense>
    </Router>
  );
};

// Init App
ReactDOM.render(<App />, document.getElementById('__root'));
