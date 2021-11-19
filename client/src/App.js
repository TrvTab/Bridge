import logo from './logo.svg';
import './App.css';
import Markers from './components/markers/marker'
import LoopList from './components/LoopList.js'
import {Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <LoopList></LoopList>
        </Col>
        <Col>
          <LoopList></LoopList>
        </Col>
      </Row>

    </div>
  );
}

export default App;
