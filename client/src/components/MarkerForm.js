import { useState, useEffect} from 'react'
import Marker from './Marker'
import {Button, Container, Stack, Row, Col, CloseButton, Text, Form} from 'react-bootstrap';


function MarkerForm({submitMarker, onCancelMarker}){

  const [title, setTitle] = useState();
  const [colour, setColour] = useState();
  const [time, setTime] = useState();

  const handleSubmit= (e) => {
    submitMarker(title, colour, time)
    e.preventDefault();

  }

    const handleCancelMarker = () => {
        onCancelMarker();
    }

  return(
        <Form onSubmit={e => { handleSubmit(e) }}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="Guitar, Drop..."
              name='title'
              type='text'
              value={title} 
              onChange={ e => setTitle(e.target.value)}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Time</Form.Label>
              <Form.Control
                name='time'
                type='text'
                value={time} 
                onChange={ e => setTime(e.target.value)}
              />
            </Form.Group>  
                <Button type='submit'>Submit Marker</Button>
                <Button onClick={handleCancelMarker}>Cancel </Button>
          </Row>
        </Form>
  );
}
export default MarkerForm;
       
       
