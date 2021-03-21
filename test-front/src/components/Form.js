import React, {useState}from 'react';
import axios from 'axios';

import './Form.css';

const Form=(props)=>{
    const[idKey, setidKey]=useState('');
    const[spot, setSpot]=useState("");
    const[lat, setLat]=useState("");
    const[lng, setLng]=useState("");
    const[sport, setSport]=useState("");
    const [favori, setFavori]=useState(false);
       

const handleChangeKey=(event) => {
        setidKey(event.target.value);
} ;
const handleChangeSpot=(event) => {
        setSpot(event.target.value);
};
const handleChangeLat=(event) => {
        setLat(event.target.value);
};
const handleChangeLng=(event) => {
        setLng(event.target.value);
};
const handleChangeSport=(event) => { 
        setSport(event.target.value);
};
const handleSubmit= (event) =>{
    const sportSpot={
        Id: idKey,
        Spot :spot,
        Latitude: lat,
        Longitude: lng,
        Sport: sport,
        Favori: favori,
    }
        axios.post('Localhost:3000/api/spots/getAllMarkersInBounds/', {sportSpot})
            .then(response=>{
                console.log('superpoulet')
                console.log(response);
                console.log(response.data);
            })
    }

        return(
            <div className="form">
                    <input id="idkey" type="text" placeholder="Id"   onChange={handleChangeKey}></input>
                    <input id="spot" type="text" placeholder="Spot"  onChange={handleChangeSpot}></input>
                    <input id="lat" type="text"  placeholder="Latitude" onChange={handleChangeLat}></input>
                    <input id="lng" type="text"placeholder="Longitude"   onChange={handleChangeLng}></input>
                    <input id="sport" type="text" placeholder="Sport" onChange={handleChangeSport}></input>
                    <p>Favori?</p>
                    <input id="favori" type="checkbox" name='favori?' onChange={()=>setFavori(!favori)}></input>
                <button onSubmit={() =>handleSubmit}>Send Form</button>     
        </div>
      )
}
export default Form