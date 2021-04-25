import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../src/Home';
import About from '../src/About';
import Login from '../src/Login';
import Profile from '../src/Profile';
import Register from '../src/Register'
import AvatarBio from '../src/AvatarBio'

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/profile" component={Profile}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/avatarbio" component={AvatarBio}></Route>
    </Switch>
  );
}

export default Main;