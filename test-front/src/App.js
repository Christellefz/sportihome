import React, {Component} from "react";
import {MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import Form from './components/Form';
//import jaune from './assets/jaune.svg';
import rouge from './assets/rouge.svg';
//import noir from './assets/noir.svg';
import "./App.css";



 

class App extends Component  {
  state = {
        lat: 43.610767,
        lng: 3.876716,
        zoom: 13
  }

  grenIcon = L.icon({
    iconUrl: rouge,
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76]
  });

  //Update position to user's position
  getLocation=()=> {
    navigator.geolocation.getCurrentPosition((position, error) =>{
      console.log(position, "getlocation")
      if(position){
      this.setState({ lat :  position.coords.latitude});
      this.setState({ lng : position.coords.longitude });
      //ICI le state devrait être modifié
    } else if (error.code === error.PERMISSION_DENIED) {
      // check if the user denied geolocation, or if there was any other problem
        alert('Geolocation has been disabled on this page, please review your browser\'s parameters');
        } else {
          alert('Unable to find your position, try again later.');
        }
  }
 ) }


  //When comp is mounted change the state to user's position
componentDidMount () {
    this.getLocation()
    console.log(this.state, 'poulet');
}
render(){
  
    const positionGreenIcon = [this.state.lat, this.state.lng];
    console.log(this.state.lat, this.state.lng)
    
  return (
    <div className= "structure">
    <div className="map">
    <MapContainer className="map" center={positionGreenIcon} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionGreenIcon} icon={this.grenIcon}>
          <Popup>
          You are here
          </Popup>
        </Marker>
      </MapContainer>
      <Form/>
      </div>
      </div>
    )
  }
}
export default App