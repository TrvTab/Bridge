import { useState, useEffect} from 'react'
import Marker from './Marker'
import MarkerForm from './MarkerForm'
import {Button, Container, Stack, Row, Col, CloseButton, Text, Form} from 'react-bootstrap';
<<<<<<< HEAD
import "./dictaphone.css"
=======
import {convertToMinutes, convertToSeconds, between, validateName } from "../Utils";
import "./MarkerList.css";
>>>>>>> 7508cb3caf362b7fa0914078df09a42f7d11b9ec


function MarkerList(props){
    const [markerItems, setMarkerItems] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [goToMarkerDest, setGoToMarkerDest] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


<<<<<<< HEAD
    const convertToMinutes = time => {
      let minutes = parseInt(time/60)
      let seconds = (Math.round(60*((time/60) - minutes))).toString()
      if (seconds.length === 1) {
        seconds = "0" + seconds
      }
      return minutes + ":" + seconds
    }

    const convertToSeconds = (time) => {
      let arr = time.split(":")
      var [minutes, seconds] = arr;
      var totalSeconds = parseInt(minutes) * 60
      totalSeconds += parseInt(seconds)
      return totalSeconds
=======
    const handleCancelMarker = () => {
      setShowForm(false);
>>>>>>> 7508cb3caf362b7fa0914078df09a42f7d11b9ec
    }

    const handleRemove = (key) => {
        setMarkerItems(markerItems => markerItems.filter((item) => item.key !== key))
    }

    const submitMarker = (title, colour, time) => {
      let returnedErrorMessage = validateName(title, markerItems);
      setErrorMessage(returnedErrorMessage)
      if(!returnedErrorMessage){
        setShowForm(false)
        setMarkerItems(markerItems => [...markerItems,
        <li list-style="none" key={title}>
            <Row>
                <Marker title={title} colour={colour} time={time} onMarkerClicked={(key) => handleMarkerClicked(key)}></Marker>
                <CloseButton onClick={() => handleRemove(title)}></CloseButton>
            </Row>
        </li>])
      }
    }

    const handleMarkerClicked = (key) => {
      setGoToMarkerDest(key)
    }

    const handleGoToMarker = (key,request) => {
      let foundItem = markerItems.find(item => item.key === key).props.children.props.children[0].props
      let timeSeconds = convertToSeconds(foundItem.time)
      let foundItemCopy =  Object.assign({request: request}, foundItem)
      foundItemCopy.time = timeSeconds
      props.onFoundTimeElement(foundItemCopy);
    }

    useEffect(()=> {
      if(goToMarkerDest)
      handleGoToMarker(goToMarkerDest, "goToMarker");
    }, [goToMarkerDest])

    const validateAddMarker = (commandData) => {
      if (!between(commandData.firstTimeStamp, 0, commandData.duration)){
        console.log("fuck")
        console.log(commandData)

        setErrorMessage("Marker exceeds video limits")
        return false
      }
      console.log("afterBetween")

      let duplicate = markerItems.find(element => commandData.name === element.key)
      if (duplicate) {
        console.log("duplicateFalse")
        return false
      }
      return true
    }

    const validateMarkerPresent = (commandData) => {
      let found = markerItems.find(element => commandData.name === element.key)
      if (!found){
        setErrorMessage(`Marker with name ${commandData.name} does not exist`)
      }
      return found
    }


    useEffect(() => {
      if (props.commandInformation.request.includes("loop")) return;
      else if (props.commandInformation.request === "addMarker"){
        if (validateAddMarker(props.commandInformation)) {
          submitMarker(props.commandInformation.name, "colour", convertToMinutes(props.commandInformation.firstTimeStamp));
        }
      } else if (props.commandInformation.request === "delMarker"){
        console.log("delMarker")
        if (validateMarkerPresent(props.commandInformation)){
          handleRemove(props.commandInformation.name)
        }
      } else if (props.commandInformation.request === "goToMarker"){
<<<<<<< HEAD
          handleGoToMarker(props.commandInformation.name, props.commandInformation.request);
      }
=======
        console.log("goToMarker")
        if (validateMarkerPresent(props.commandInformation)){

          handleGoToMarker(props.commandInformation.name, props.commandInformation.request);       
        }
        } 

>>>>>>> 7508cb3caf362b7fa0914078df09a42f7d11b9ec
    }, [props.commandInformation])

    const addMarker = () => {
        setShowForm(true)
    }

    console.log("test")
    return (
      <div style={{height: 70, width: 300, float:'right'}}>
      <Container>
        {!showForm && (
          <ul>
            {markerItems}
<<<<<<< HEAD
            <Button className = 'controlButton' onClick={addMarker}>Add Marker</Button>
=======
            <Button className="custom-btn" onClick={addMarker}>Add Marker</Button>
>>>>>>> 7508cb3caf362b7fa0914078df09a42f7d11b9ec
          </ul>
        )}
        {showForm && (
            <div style={{marginTop: 20}}>
                <MarkerForm errorMessage={errorMessage} submitMarker={submitMarker} onCancelMarker={handleCancelMarker}></MarkerForm>
            </div>
        )}

      </Container>
      </div>
    );
}
export default MarkerList;