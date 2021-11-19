import './markers.css';
import { useState, useEffect} from 'react'

function Markers() {
    
   

  const [markerState, setMarkerState] = useState({ markers: [] })


  useEffect((() => {
      fetch('http://localhost:5000/api/markers')
      .then(res => res.json())
      .then(markers => {
        setMarkerState({ markers })
    })
        .catch(e => {
            console.log("Error fetching markers",)
        })
      return () => {
          console.log('Unmounted...') 
      }
  }), [])

  return (
    <div className="Markers">
     <h1> Markers</h1>
     <ul>{markerState.markers.map(marker => <li key={marker.id}> { marker.name } {marker.time}</li>)} </ul> 
    </div>
  );
}

export default Markers;
