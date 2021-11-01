import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch> 
  )
}

export default Routes;
