import React, {Component} from "react";
import {MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import Form from './components/Form';
import jaune from './assets/jaune.svg';
import rouge from './assets/rouge.svg';
import noir from './assets/noir.svg';
import "./App.css";



 

class App extends Component  {
  state = {
        lat: "48.856613",
        lng: "2.352222",
        zoom: 13
  }


  //Update position to user's position
  getLocation() {
    navigator.geolocation.getCurrentPosition((position) =>{
      console.log(position)
      this.setState({ lat :  position.coords.latitude});
      this.setState({ lng : position.coords.longitude })
    },
    (error) => {
      // check if the user denied geolocation, or if there was any other problem
        if (error.code === error.PERMISSION_DENIED) {
          alert('Geolocation has been disabled on this page, please review your browser\'s parameters');
        } else {
          alert('Unable to find your position, try again later.');
        }
  }, {
      timeout: 10000
  });
} 
  //When comp is mounted change the state to user's position
componentDidMount () {
    this.getLocation()
    console.log(this.state)
}
  grenIcon = L.icon({
    iconUrl: noir,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]
  });

render(){
  
    const positionGreenIcon = [this.state.lat, this.state.lng];
    
  return (
    <div>
    <MapContainer className="map" center={positionGreenIcon} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionGreenIcon} icon={this.grenIcon}>
          <Popup>
          I am a green leaf
          </Popup>
        </Marker>
      </MapContainer>
      <Form/>
      </div>
    )
  }
}
export default App