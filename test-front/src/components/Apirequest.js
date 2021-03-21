import React from 'react';
import axios from 'axios';

const appel= () =>{

    axios.get('localhost:3000/api/spots/getAllMarkersInBounds/:southwest/:northeast')
    return()
}
export default appel