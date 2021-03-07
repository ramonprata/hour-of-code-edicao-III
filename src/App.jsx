import './App.css';
import { Header } from './shared/Components';
import { ThemeProvider } from '@material-ui/styles';
import { Boards, BoardDetails } from './MVPTrello';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { getMaterialUItheme } from './shared/theme';

function App() {
  const themeType = 'dark';

  const materialUItheme = getMaterialUItheme(themeType);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ThemeProvider theme={materialUItheme}>
            <Header darkMode={themeType === 'dark'} />
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
          </ThemeProvider>
        </Router>
      </header>
    </div>
  );
}

export default App;
