import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import LoginContainer from './containers/LoginContainer/LoginContainer'
import MainContainer from './containers/MainContainer/MainContainer';
import RepositoryContainer from './containers/RepositoryContainer/RepositoryContainer';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/:username" component={MainContainer} />
          <Route path="/:username/repo/:repo" component={RepositoryContainer} />
          <Redirect to="/" />
        </Switch>
    </Router>
  );
}

export default App;
