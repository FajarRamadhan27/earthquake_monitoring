import React from "react"
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api"

import './Map.scss'

const center = { lat: -7.0909, lng: 107.6689}

const Map = () => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

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

      </GoogleMap>
      <h4>asdeasdasdas</h4>
    </div>
  )
}

export default Map