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
  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <ThemeContext.Provider value={themes.link}>
            <AulaVHooks />
          </ThemeContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
