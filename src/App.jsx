import './App.css';
import Hello from './Hello';
import {
  MyFirstClassComponent,
  MyFirstFunctionalComponent,
  ConditionalComponent,
} from './Components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyFirstClassComponent />
        <MyFirstFunctionalComponent /> */}
        <ConditionalComponent />
      </header>
    </div>
  );
}

export default App;
