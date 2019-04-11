import React from 'react';
import routes from './routes';
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <HashRouter>
    <Switch>
      {routes.map((route, i) => <Route key={i} {...route} />)}
    </Switch>
  </HashRouter>
);

export default App;
