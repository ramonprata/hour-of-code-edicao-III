import { useEffect, useState } from 'react';
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
import { WelcomeDialog, SplitPane, Chat, Contacts, Feed, FancyBorder } from './aulaIV';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <FancyBorder>
            <SplitPane leftContent={<Chat />} rightContent={<Contacts />}>
              <Feed />
            </SplitPane>
          </FancyBorder>
        </div>
      </header>
    </div>
  );
}

export default App;
