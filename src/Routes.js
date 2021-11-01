import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import About from './components/About/About';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/experience" component={Experience}></Route>
      <Route exact path="/about" component={About}></Route>
    </Switch> 
  )
}

export default Routes;
