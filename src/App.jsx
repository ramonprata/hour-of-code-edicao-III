import './App.css';
import './shared/mocks/mockAPI';
import { Header } from './shared/Components';
import { ThemeProvider } from '@material-ui/styles';
import { Boards, BoardDetails } from './MVPTrello';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { getMaterialUItheme } from './shared/theme';

function App() {
  const [themeType, setTheme] = useState('dark');

  const materialUItheme = getMaterialUItheme(themeType);

  const handleSwitchDarkMode = () => {
    setTheme((themeType) => (themeType === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ThemeProvider theme={materialUItheme}>
            <Header darkMode={themeType === 'dark'} handleSwitchDarkMode={handleSwitchDarkMode} />
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
