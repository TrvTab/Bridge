import logo from './logo.svg';
import './App.css';
import Dictaphone from './components/dictaphone';
import Player from './components/players/player';
import LoopList from './components/LoopList.js'
import MarkerList from './components/MarkerList.js'
import {Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import Popup from './components/popup';

function App() {
  
  const [command, setCommandState] = useState({
    request: '',
    name: '',
    firstTimeStamp: '',
    secondTimeStamp: ''
  })

  const [reply, setReplyState] = useState({
    request: '',
    name: '',
    firstTimeStamp: '',
    secondTimeStamp: ''
  })

  function handleFoundMarker(reply){
    console.log("App js", reply)
    setReplyState(reply);
  }

  function handleCommandChange(message){
    setCommandState(command => message)
  }
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
      <Popup/>
      <Row>
        <Col>
          <LoopList commandInformation={ command }></LoopList>
        </Col>
        <Col>
          <MarkerList commandInformation={ command  } onFoundMarker={handleFoundMarker}></MarkerList>
        </Col>
      </Row>   
      <Player onCommandChange={handleCommandChange} reply={reply}/>
     
      

    </div>
  );
}

export default App;
