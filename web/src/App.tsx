import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import LoginContainer from './containers/LoginContainer/LoginContainer'
import MainContainer from './containers/MainContainer/MainContainer';
import RedirectContainer from './containers/RedirectContainer/RedirectContainer';

function App() {
  return (
    <Router>
      {window.localStorage.getItem('github_token') ?
        <Switch>
          <Route path="/home" component={MainContainer} />
          <Redirect from="*" to="/home" />
        </Switch>
        :
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/redirect" component={RedirectContainer} />
          <Redirect to="/login" />
        </Switch>
      }
    </Router>
  );
}

export default App;
