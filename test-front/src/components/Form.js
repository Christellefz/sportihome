import React, {useState}from 'react';
import './Form.css';

const Form=(props)=>{
    const[idKey, setidKey]=useState('');
    const[spot, setSpot]=useState("");
    const[lat, setLat]=useState("");
    const[lng, setLng]=useState("");
    const[sport, setSport]=useState("");
    const [favori, setFavori]=useState(false);
       

const handleChange=(event) => {
        setidKey(event.target.value);
        setSpot(event.target.value);
        setLat(event.target.value);
        setLng(event.target.value);
        setSport(event.target.value);
    }
    const handleSubmit= (event) =>{
        console.log("poulet")
    }

        return(
            <div className="form">
         {/*//action="http://foo.com" method="get"*/}
         <input id="idkey" type="text"  value={idKey} onChange={handleChange}></input>
         <input id="spot" type="text"  value={spot} onChange={handleChange}></input>
         <input id="lat" type="text"  value={lat} onChange={handleChange}></input>
         <input id="lng" type="text"  value={lng} onChange={handleChange}></input>
         <input id="sport" type="text"  value={sport} onChange={handleChange}></input>
         <input id="favori" type="checkbox"  onChange={()=>setFavori(!favori)}></input>

        
        <input name="to" value="Mom"></input>
        <button onSubmit={handleSubmit}>Send Form</button>     
        </div>
      )
}
export default Form