import React, { useState } from "react"
import { useJsApiLoader, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api"

import './Map.scss'
import Drawer from "../../components/Drawer/Drawer"
import { getDevicesPosition, getHistory, setActivityHistories, setSelectedMarker } from "../../utils"
import { useDispatch } from 'react-redux'

import { getContacts, setContact } from '../../utils';

const center = { lat: -7.0909, lng: 107.6689}

const Map = () => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [markerPositions, setMarkerPosition] = useState([]);
  const [markerHover, setMarkerHover] = useState(null);

  useState(() => {
    getDevicesPosition((res) => {
      setMarkerPosition(res)
    })
  }, [])

  const dispatch = useDispatch()


  const handleDrawerHover = (marker) => {
    setMarkerHover(marker)
  }

  const handleDrawerHoverOut = (marker) => {
    setMarkerHover(null)
  }


  const [drawerOpen, setDrawer] = useState(false)

  const handleMarkerClick = (marker) => {
    dispatch(setSelectedMarker(marker))

    getContacts({location_id: marker.location_id }, (result) => {
      dispatch(setContact(result))
    })

    getHistory({ device_id: marker.device_id }, (res) => {
      dispatch(setActivityHistories(res))
    })

    setDrawer(true)
  }

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
            onMouseOver={() => {handleDrawerHover(marker)}}
            onMouseOut={handleDrawerHoverOut} 
            onClick={() => handleMarkerClick(marker)} 
          >
            {markerHover === marker && (
              <InfoWindow onCloseClick={handleDrawerHoverOut}>
                <div>
                  <div>{marker.name}</div>
                  <div><b>Devide_id :</b>{marker.device_id}</div>
                </div>
               
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
      <Drawer open={drawerOpen} handleClose={setDrawer}/>
    </div>
  )
}

export default Map