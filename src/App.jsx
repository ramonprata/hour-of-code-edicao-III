import React, { useState } from 'react';
import './App.css';
import { Boards, BoardDetails, Header } from './MVPTrello';
import themes from './shared/theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const ThemeContext = React.createContext(themes.light);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleSwitchDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="root">
          <Router>
            <div className="content">
              <ThemeContext.Provider value={darkMode ? themes.dark : themes.light}>
                <Header />
                <Switch>
                  <Route path="/" exact>
                    <Boards />
                  </Route>
                  <Route path="/board/:id">
                    <BoardDetails />
                  </Route>
                </Switch>
              </ThemeContext.Provider>
            </div>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
