import uniqid from 'uniqid';
import './App.css';
import { Header } from './shared/Components';
import { Boards } from './MVPTrello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="root">
          <Header />
          <Boards />
        </div>
      </header>
    </div>
  );
}

export default App;
