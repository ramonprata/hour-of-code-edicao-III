import './App.css';
import {
  MyFirstFunctionalComponent,
  MyFirstClassComponent,
  ConditionalComponent,
} from './Components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <ConditionalComponent renderA={true} />
          <MyFirstClassComponent />
          <MyFirstFunctionalComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
