import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../src/Home';
import About from '../src/About';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      {<Route exact path="/about" component={About}></Route>}
    </Switch>
  );
}

export default Main;