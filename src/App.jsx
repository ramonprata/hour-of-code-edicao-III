import uniqid from 'uniqid';
import './App.css';
import { Header } from './shared/Components';
import { Boards, BoardDetails } from './MVPTrello';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />
          <div className="root">
            <Switch>
              <Route path="/" exact>
                <Boards />
              </Route>
              <Route path="/board/:id">
                <BoardDetails />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
