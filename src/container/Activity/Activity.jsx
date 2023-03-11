import { Tab, Tabs } from "@mui/material"
import React, { useEffect, useState } from "react"
import "./Activity.scss"
import InputLocationModal from "../../components/Modal/InputLocationModal"
import TabPanel from "../../components/Tab/TabPanel"
import { LocationTable } from "../../components"
 
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

  const handleModalOpen = () => {
    setInputModal(true)
  }

  return (
    <div className="app__activity">
      <div className="app__activity-head">
        <h3 className="app__activity-head-title">Sistem Monitoring Peringatan Dini Zona Rawan Longsor dan Gempa Bumi</h3>
      </div>
        {/* <Tooltip title="Tambah Lokasi">
          <IconButton onClick={handleModalOpen}>
              <AddIcon/>
          </IconButton>
        </Tooltip> */}
      <div className="app__activity-list">
        <Tabs className="tab-activity-menu" value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="Aktivitas" {...a11yProps(0)} />
          <Tab label="Lokasi" {...a11yProps(1)}/>
        </Tabs>
        <TabPanel value={tabIndex} index={0}>
          <div className="app__activity-item" key="Test">
            <div className="item-mg app__flex">
              <span>2.9</span>
            </div>
            <div className="item-detail">
              <h6>Kabupaten Cianjur</h6>
              <div className="subheader app__flex">
                <span className="time">2023-03-11 20:07:13 (UTC+07:00)</span>
                <span className="depth">3.7 km</span>
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