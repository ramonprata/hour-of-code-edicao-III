import React, { useEffect, useState } from 'react';
import './App.css';
import { MyFirstFunctionalComponent, MyFirstClassComponent, ConditionalComponent } from './aulaII';
import {
  InlineStyleComponent,
  CssComponent,
  PreprocessorComponent,
  StyledComponent,
  MaterialUIStyleComponent,
  CssModuleComponent,
} from './aulaIII';
import { WelcomeDialog, SplitPane, Chat, Contacts, Feed } from './aulaIV';
import { AulaVHooks } from './aulaV';
import themes from './shared/theme';

export const ThemeContext = React.createContext(themes.light);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleSwitchDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <ThemeContext.Provider value={darkMode ? themes.dark : themes.light}>
            <AulaVHooks handleSwitchDarkMode={handleSwitchDarkMode} darkMode={darkMode} />
          </ThemeContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
