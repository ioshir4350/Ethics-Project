import {BrowserRouter as Router,
Switch, Route} from 'react-router-dom'
import Welcome from './components/pages/Welcome'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/bye" exact>
          <h1>bye </h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
