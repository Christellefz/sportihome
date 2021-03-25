import React, {useState} from 'react';
import axios from 'axios';

const Appel= () =>{
const [poulet, setPoulet]=useState([]) ;
let iciLesCoordNE =[44.00, 4.00]
let iciLesCoordSW=[45.00, 5.00]

    axios.get(`Localhost:3000/api/spots/getAllMarkersInBounds/?northeast=${iciLesCoordNE}&southweast=${iciLesCoordSW}`,)
    .then((res) =>setPoulet(res.data));
    console.log(poulet[0])
    return(
        <div>test:{poulet}</div>
    )
}
export default Appel