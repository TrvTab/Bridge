import { useState, useEffect} from 'react'
import Marker from './Marker'
import MarkerForm from './MarkerForm'
import {Button, Container, Stack, Row, Col, CloseButton, Text, Form} from 'react-bootstrap';


function MarkerList(props){
    const [markerItems, setMarkerItems] = useState([])
    const [showForm, setShowForm] = useState(false)



    const handleRemove = (key) => {
        setMarkerItems(markerItems => markerItems.filter((item) => item.key !== key))
    }

    const submitMarker = (title, colour, time) => {
        setShowForm(false)
        setMarkerItems(markerItems => [...markerItems,
        <li list-style="none" key={title}>
            <Row>
                <Marker title={title} colour={colour} time={time}></Marker>
                <CloseButton onClick={() => handleRemove(title)}></CloseButton>
            </Row>
        </li>])
    }

    const handleGoToMarker = (key) => {
        props.onFoundMarker(markerItems.find(item => item.key === key));
    }

    useEffect(() => {
      if (props.commandInformation.request.includes("loop")) return;
      else if (props.commandInformation.request === "addMarker"){
       submitMarker(props.commandInformation.name, "colour", props.commandInformation.firstTimeStamp);
      } else if (props.commandInformation.request === "goToMarker"){
          handleGoToMarker(props.commandInformation.name);       
      }

    }, [props.commandInformation])

    const addMarker = () => {
        setShowForm(true)
    }
    

    return (
      <Container>
        {!showForm && (
          <ul>
            {markerItems}
            <Button onClick={addMarker}></Button>
          </ul>
        )}
        {showForm && (
            <div>
                <MarkerForm submitMarker={submitMarker}></MarkerForm>
            </div>
        )}

      </Container>
    );
}
export default MarkerList;