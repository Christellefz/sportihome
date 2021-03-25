import React, {useState, useEffect}from'react';
import  fakeData from './Data';

const Filter = ()=>{
    const [velo, setVelo]= useState(false);
    const [kite, setKite]= useState(false);
    const  [yoga,setYoga] =useState(false);
    const selectedHobbiesVelo= fakeData.filter(item =>item.Sport.includes('Velo'))

    useEffect(()=>{
        
        console.log(`${velo} and `, selectedHobbiesVelo,  fakeData )

    },[velo] )

 
    return(
       
        <div>
            <label for="velo" name="velo"> Velo?
            <input type="checkbox" onChange={()=>{setVelo(!velo)}}></input>
            </label>Kitesurf?
            <label for="Kite" name="Kite">
            <input type="checkbox" onChange={()=>{setKite(!kite)}}></input>
            </label>Yoga?
            <label for="yoga" name="yoga">
            <input type="checkbox" onChange={() =>{setYoga(!yoga)}}></input>
            </label>
            {velo
            ?( selectedHobbiesVelo.map(selectedHobbiesVelo =><li key={selectedHobbiesVelo.id}>
                {selectedHobbiesVelo.Spot}</li>))
            : null}
        </div>
    )
};

export default Filter;