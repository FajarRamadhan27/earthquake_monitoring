import React, { useState } from "react"
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api"

import './Map.scss'
import Drawer from "../../components/Drawer/Drawer"

const center = { lat: -7.0909, lng: 107.6689}

const Map = () => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

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

      </GoogleMap>
      <Drawer open={drawerOpen} handleClose={toogleDrawer}/>
    </div>
  )
}

export default Map