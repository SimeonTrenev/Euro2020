import React from "react";
import Teams from './Teams';
import Greetings from './Greetings';
import Groups from './Groups';
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
    <div>
      <Switch>
      <Route path="/" exact={true}>
      <Greetings />
      </Route>
      <Route path="/groups" exact={true}>
      <Groups/>
      </Route>
      <Route>
      <Teams />
      </Route>
      </Switch>
    </div>
    );
  }
}

export default App;
