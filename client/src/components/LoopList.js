import { useState, useEffect} from 'react'
import Loop from './Loop'
import LoopForm from './LoopForm'
import {Button, Container, Stack, Row, Col, CloseButton, Text, Form} from 'react-bootstrap';


function LoopList(props){
    const [loopItems, setLoopItems] = useState([])
    const [showForm, setShowForm] = useState(false)

   

    const handleRemove = (key) => {
        console.log("TEEEEST", key)
        setLoopItems(loopItems => loopItems.filter((item) => item.key !== key))
    }
    
    const submitLoop = (title, colour, startTime, endTime) => {
        setShowForm(false)
        setLoopItems(loopItems => [...loopItems,
        <li list-style="none" key={title}>
            <Row>
                <Loop title={title} colour={colour} startTime={startTime} endTime={endTime}></Loop>
                <CloseButton onClick={() => handleRemove(title)}></CloseButton>
            </Row>
        </li>])
    }

    useEffect(() => {
      if (props.commandInformation.request.includes("marker")){
        return;
      } 
      else if (props.commandInformation.request === "addLoop"){
       submitLoop(props.commandInformation.name, "colour", props.commandInformation.firstTimeStamp, props.commandInformation.secondTimeStamp)
      }
       else if (props.commandInformation.request === "delLoop"){
        handleRemove(props.commandInformation.name)
      }
      return () => {
      }
    }, [props.commandInformation])


    const addLoop = () => {
        setShowForm(true)
    }

    return (
      
      <Container>
        {!showForm && (
          <ul>
            {loopItems}
            <Button onClick={addLoop}></Button>
          </ul>
        )}
        {showForm && (
            <div>
                <LoopForm submitLoop={submitLoop}></LoopForm>
            </div>
        )}
        

      </Container>
    );
}
export default LoopList;