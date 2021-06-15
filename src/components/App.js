import React from "react";
import Teams from './Teams';
import Greetings from './Greetings';
import Groups from './Groups';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Results from './Results';
import Tables from './Tables';
import AddTeams from './AddTeams';

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
      <Route path="/tables" component={Tables} />
      <Route path="/add-teams" component={AddTeams} />
      </Switch>
    </div>
    );
  }
}

export default App;
