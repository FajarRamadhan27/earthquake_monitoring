import React, { useEffect, useState } from "react"
import "./Activity.scss"
 
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

const Activity = () => {
  
  const [activities, setActivities] = useState([])
  
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
  
  console.log(activities)
  return (
    <div className="app__activity">
      <div className="app__activity-head">
        <h3 className="app__activity-head-title primary-text">Sistem Monitoring Peringatan Dini Zona Rawan Longsor dan Gempa Bumi</h3>
        <h5 className="app__activity-head-subtitle">29 earthquakes</h5>
      </div>
      <div className="app__activity-list">
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
    </div>
  )
}

export default Activity