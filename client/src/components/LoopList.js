import { useState, useEffect} from 'react'
import Loop from './Loop'
import LoopForm from './LoopForm'
import {Button, Container, Stack, Row, Col, CloseButton, Text, Form} from 'react-bootstrap';


function LoopList(){
    const [listItems, setListItems] = useState([])
    const [showForm, setShowForm] = useState(false)


    const handleRemove = (key) => {
        console.log("TEEEEST")
        setListItems(listItems => listItems.filter((item) => item.key !== key))
    }

    const submitLoop = (title, colour, startTime, endTime) => {
        setShowForm(false)
        setListItems(listItems => [...listItems,
        <li list-style="none" key={title}>
            <Row>
                <Loop title={title} colour={colour} startTime={startTime} endTime={endTime}></Loop>
                <CloseButton onClick={() => handleRemove(title)}></CloseButton>
            </Row>
        </li>])
    }

    const addLoop = () => {
        setShowForm(true)
    }
    

    return (
      <Container>
        {!showForm && (
          <ul>
            {listItems}
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