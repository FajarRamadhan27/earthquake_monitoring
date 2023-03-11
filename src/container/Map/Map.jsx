import React, { useState } from "react"
import { useJsApiLoader, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api"

import './Map.scss'
import Drawer from "../../components/Drawer/Drawer"

const center = { lat: -7.0909, lng: 107.6689}

const Map = () => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [markerPositions, setMarkerPosition] = useState([
    { lat: -6.9175, lng: 107.6191, name: "Bandung" },
    { lat: -6.5733, lng: 107.7646, name: "Kabupaten Subang" },
    { lat: -6.3017, lng: 107.1426, name: "Karawang" },
    { lat: -6.2348, lng: 106.9926, name: "Bekasi" }
  ]);

  const [selectedMarker, setSelectedMarker] = useState(null);

  function handleMarkerClick(marker) {
    setSelectedMarker(marker);
  }

  function handleInfoWindowClose() {
    setSelectedMarker(null);
  }

  const [drawerOpen, setDrawer] = useState(false)

  const toogleDrawer = () => (
    setDrawer(!drawerOpen)
  )

  

  if (!isLoaded) {
    return <h4>Loading</h4>
  }

  return (
    <div className="app__map">
      <GoogleMap
        center={center}
        zoom={9}
        mapContainerStyle={{ width: '100%', height: '100%' }}
      >
        {markerPositions.map((marker, index) => (
          <Marker 
            position={marker}
            onMouseOver={() => handleMarkerClick(marker)}
            onMouseOut={() => setSelectedMarker(null)} 
            onClick={toogleDrawer} 
          >
            {selectedMarker === marker && (
              <InfoWindow onCloseClick={handleInfoWindowClose}>
                <div>{marker.name}</div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
      <Drawer open={drawerOpen} handleClose={toogleDrawer}/>
    </div>
  )
}

export default Map