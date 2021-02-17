import React from 'react';
import Currencies from '../Pages/Currencies/Currencies';
import { Switch, Route, Redirect } from 'react-router-dom';

const Routes: React.FC<{}> = () => (
  <Switch>
    <Redirect from="/" exact to="/currencies" />
    <Route path="/currencies" exact component={Currencies} />
  </Switch>
);

export default Routes;
