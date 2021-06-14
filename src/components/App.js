import React from "react";
import Teams from './Teams';
import Greetings from './Greetings';
import Groups from './Groups';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Results from './Results';

class App extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <Switch>
      <Route path="/" exact={true} component={Greetings} />
      <Route path="/groups" component={Groups} />
      <Route path="/teams" component={Teams} />
      <Route path="/results" component={Results} />
      </Switch>
    </div>
    );
  }
}

export default App;
