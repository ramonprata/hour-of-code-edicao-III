import { useEffect, useState } from 'react';
import './App.css';
import {
  MyFirstFunctionalComponent,
  MyFirstClassComponent,
  ConditionalComponent,
  InlineStyleComponent,
  CssComponent,
  PreprocessorComponent,
  StyledComponent,
  MaterialUIStyleComponent,
  CssModuleComponent,
} from './Components';

function App() {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <InlineStyleComponent isActive={isActive} />
          <CssComponent isActive={isActive} />
          <CssModuleComponent isActive={isActive} />
          <PreprocessorComponent isActive={isActive} />
          <StyledComponent isActive={isActive} />
          <MaterialUIStyleComponent isActive={isActive} />
        </div>
      </header>
    </div>
  );
}

export default App;
