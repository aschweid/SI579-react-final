import logo from './logo.svg';
import './App.css';
import Counter from "./components/TestComponent";


function App() {
  return (
    <div className="App" id='root'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name: Alexandra Schweid</p>
        <p>Uniquename: aschweid</p>

        <Counter />
      </header>
    </div>
  );
}

export default App;
