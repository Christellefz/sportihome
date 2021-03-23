import React, {useState, useEffect}from'react';
import  fakeData from './Data';

const Filter = ()=>{
    const [velo, setVelo]= useState(false);
    const [kite, setKite]= useState(false);
    const  [yoga,setYoga] =useState(false);
    const filteredActivity=[]

    useEffect(()=>{
        
        console.log(filteredActivity)
     if (velo === true) {filteredActivity.push(fakeData.filter(objet =>objet.Sport==="velo"))};
     if (kite === true) {filteredActivity.push(fakeData.filter(objet =>objet.Sport.includes("kite")))};
     if (yoga === true) {filteredActivity.push(fakeData.filter(objet =>objet.Sport.includes("yoga")))};
    },[filteredActivity] )
    //Je n'arrive pas à push les valeurs dans le nouveau tableau
 
    return(
       
        <div>
            <label for="velo" name="velo"> Velo?
            <input type="checkbox" onChange={()=>{setVelo(!velo)}}></input>
            </label>Kitesurf?
            <label for="Kite" name="Kite">
            <input type="checkbox" onChange={()=>{setKite(!kite)}}></input>
            </label>Yoga?
            <label for="Yoga" name="Yoga">
            <input type="checkbox" onChange={() =>{setYoga(!yoga)}}></input>
            </label>
        </div>
    )
};

export default Filter;