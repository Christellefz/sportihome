import React, {useState} from 'react';
import axios from 'axios';

const Appel= () =>{
const [poulet, setPoulet]=useState([]) 
    axios.get("https://miadil.github.io/starwars-api/api/all.json")
    .then((res) =>setPoulet(res.data));
    console.log(poulet[0])
    return(
        <div>test</div>
    )
}
export default Appel