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
import { WelcomeDialog, SlitPane, Chat, Contacts, Feed } from './aulaIV';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <SlitPane rightContent={<Chat />} leftContent={<Contacts />}>
            <Feed />
          </SlitPane>
        </div>
      </header>
    </div>
  );
}

export default App;
