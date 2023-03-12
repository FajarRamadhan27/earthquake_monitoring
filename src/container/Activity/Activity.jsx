import { Tab, Tabs } from "@mui/material"
import React, { useEffect, useState } from "react"
import "./Activity.scss"
import InputLocationModal from "../../components/Modal/InputLocationModal"
import TabPanel from "../../components/Tab/TabPanel"
import { LocationTable } from "../../components"
import GrainIcon from '@mui/icons-material/Grain';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import TerrainIcon from '@mui/icons-material/Terrain';
import LandslideIcon from '@mui/icons-material/Landslide';
 
var mqtt = require("mqtt");
var options = {
  protocol: "ws",
  username: "",
  password: "",
  keepalive: 20,
  clientId: "phpMQTT-subscriber",
};
var client = mqtt.connect(process.env.REACT_APP_MQTT_HOST, options);
 
client.subscribe("disaster/history");

function a11yProps(index) {
  return {
    id: `simple-tab-activity-${index}`,
    'aria-controls': `simple-tabpanel-activity-${index}`,
  };
}

const Activity = () => {
  
  const [activities, setActivities] = useState([])
  const [modalInputOpen, setInputModal] = React.useState(false);
  
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    client.on("message", function (topic, message) {
      var note = message.toString();
      console.log("Received message:", note);
      setActivities(prevActivities => [
        ...prevActivities,
        {
          mg: 2.6,
          location: "14 km SE of Lincolnville, Kansaasdaasdasdas",
          time: "2023-03-07 17:40:54 (UTC+07:00)",
          dept: "7.3 km",
        },
      ]);
    });
  }, [client]);
  
  const handleModalClose = () => {
    setInputModal(false)
  }

  return (
    <div className="app__activity">
      <div className="app__activity-head">
        <h2 className="app__activity-head-title">Early Warning System</h2>
      </div>
      <div className="app__activity-list">
        <Tabs className="tab-activity-menu" value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="Aktivitas" {...a11yProps(0)} />
          <Tab label="Lokasi" {...a11yProps(1)}/>
        </Tabs>
        <TabPanel value={tabIndex} index={0}>
          <div className="app__activity-item" key="Test">
            <div className="item-mg app__flex">
              <h4>CGK-01</h4>
            </div>
            <div className="item-detail">
              <span className="time">2023-03-11 20:07:13</span>
              <div className="activity-detail-container">
                <div className="activity-detail">
                  <InvertColorsIcon fontSize="inherit"/>
                  <span className="detail-value">80.5</span>
                </div>
                <div className="activity-detail right-side">
                  <GrainIcon fontSize="inherit"/>
                  <span className="detail-value">70.05</span>
                </div>
              </div>
              <div className="activity-detail-container">
                <div className="activity-detail">
                  <TerrainIcon fontSize="inherit"/>
                  <span className="detail-value">60.1</span>
                </div>
                <div className="activity-detail right-side">
                  <LandslideIcon fontSize="inherit"/>
                  <span className="detail-value">40.568</span>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
         <LocationTable/>
        </TabPanel>
        {activities.map((activity, index) => (
          <div className="app__activity-item" key={index}>
            <div className="item-mg app__flex">
              <span>{activity.mg}</span>
            </div>
            <div className="item-detail">
              <h6>{activity.location}</h6>
              <div className="subheader app__flex">
                <span className="time">{activity.time}</span>
                <span className="depth">{activity.depth}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <InputLocationModal open={modalInputOpen} handleClose={handleModalClose}/>
    </div>
  )
}

export default Activity