//import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState, useEffect } from 'react'
import Markers from './markers/markers';


function Dictaphone(props) {

  const [message, setMessage] = useState({
    request: '',
    name: '',
    firstTimeStamp: '',
    secondTimeStamp: ''
  })

  const commands = [

    //Add marker and loop with name
    {
      command: 'add marker called :name at :timestamp',
      callback: (name, timestamp) => setMessage({request: 'addMarker', name: name, firstTimeStamp: timestamp})
    },
    {
      command: 'Add loop called :name from :firstTimeStamp to :secondTimeStamp ',
      callback: (name, firstTimeStamp, secondTimeStamp) => 
          setMessage({request: 'addLoop', name: name, firstTimeStamp: firstTimeStamp, secondTimeStamp: secondTimeStamp})
    },
    //Add marker and loop without name
    {
      command: 'add marker at :timestamp',
      callback: (timestamp) => setMessage({request: 'addMarker', firstTimeStamp: timestamp})
    },
    {
      command: 'Add loop from :firstTimeStamp to :secondTimeStamp ',
      callback: (firstTimeStamp, secondTimeStamp) => 
          setMessage({request: 'addLoop', firstTimeStamp: firstTimeStamp, secondTimeStamp: secondTimeStamp})
    },
    //Delete marker and loop 
    {
      command: 'Delete marker called :name ',
      callback: (name) => 
          setMessage({request: 'delMarker', name: name})
    },
    {
      command: 'Delete loop called :name ',
      callback: (name) => 
          setMessage({request: 'delLoop', name: name})
    },
    {
      command: 'skip ahead',
      callback: () =>
          setMessage({request: 'skipFwd'})
    },
    {
      command: 'skip backwards',
      callback: () =>
          setMessage({request: 'skipBwd'})
    },
    {
      command: 'restart',
      callback: () =>
          setMessage({request: 'restart'})
    }

  ]

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});
  
  
  function handleTranscriptChange(event){
    console.log(event.target.value)
  }

  // Everytime message is updated, reset it and send data to parent
  useEffect(() => {
    props.sendToPlayer(message)
    resetTranscript()

    return () => {
      resetTranscript()
    }
  }, [message])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{message.request + " " + message.name}</p>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;