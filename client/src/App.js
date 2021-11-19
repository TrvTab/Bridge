import logo from './logo.svg';
import './App.css';
import Markers from './components/markers/markers'
import Dictaphone from './components/dictaphone';
import ReactPlayer from 'react-player/lazy'
import Player from './components/players/player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Markers />
      
      <Player/>
     
      <input type="range" min="0" max="0.999999" step="any"></input>
    </div>
  );
}

export default App;
