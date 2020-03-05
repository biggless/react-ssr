import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import Reverse from './pages/reverse';
import NotFound from './pages/not_found';

export default () => (
  <>
    <Link to="/">Home</Link>
    {' '}
    <Link to="/reverse">Reverse</Link>
    {' '}
    <Link to="/qwerty">Broken</Link>
    <hr />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/reverse">
        <Reverse />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </>
);
