import { useState } from 'react';
import {BrowserRouter as Router,
Switch, Route} from 'react-router-dom'
import Welcome from './components/pages/Welcome'
import Decision from './components/shared/Decision';
import Summary from './components/pages/Summary';
import GraphA from './components/pages/GraphA';
import GraphB from './components/pages/GraphB';
function App() {
  return (
    <div className="App">
      
      <Router>      
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/page/:task" exact>
            <Decision />
          </Route>
          <Route path="/summary" exact>
            <Summary />
          </Route>
          <Route path="/graphA" exact>
            <GraphA />
          </Route>
          <Route path="/graphB" exact>
            <GraphB/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
