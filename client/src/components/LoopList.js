import { useState, useEffect} from 'react'
import Loop from './Loop'
import LoopForm from './LoopForm'
import {Button, Container, Stack, Row, Col, CloseButton, Text, Form} from 'react-bootstrap';


function LoopList(){
    const [listItems, setListItems] = useState([])
    const [showForm, setShowForm] = useState(false)

    const deleteLoop = () => {
        setListItems(listItems.filter((item) => item.key === ""))
    }
    
    const submitLoop = (title, colour, startTime, endTime) => {
        setShowForm(false)
        setListItems(listItems => [...listItems,<Loop key={title} title={title} colour={colour} startTime={startTime} endTime={endTime}></Loop>])
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