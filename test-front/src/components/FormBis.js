import axios from 'axios'
import { useState } from 'react'

import './Formbis.css'

const FormBis = () => {
  const [id, setId] = useState('')
  const [spot, setSpot] = useState('')
  const [coord, setCoord] = useState([]) 
  const [sport, setSport] = useState('')
  const [favori, setFavori] = useState(false)
    const allPost = {
        id: id,
        Spot: spot,
        coordonnées: coord,
        Sport:sport,
        Favori: favori
    }

  const handleChange = e => {
    e.target.name === 'id'
      ? setId(e.target.value)
      : e.target.name === 'spot'
      ? setSpot(e.target.value)
      :e.target.name === 'coord' 
     ? setCoord(e.target.value)
     :e.target.name === 'sport'
     ? setSport(e.target.value)
     :setFavori (e.target.balue)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/api/spots/getAllMarkersInBounds', allPost)
      .then(res => {
        alert(`${res.data} !`)
      })
      .catch(e => {
        console.error(e)
        alert(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Création de sport</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className='form-data'>
            <label htmlFor='id'>
              ID<span> * </span>
            </label>
            <input
              type='text'
              id='id'
              name='id'
              onChange={handleChange}
              required
              value={id}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='spot'>
              Spot<span> * </span>
            </label>
            <input
              type='text'
              id='spot'
              name='spot'
              onChange={handleChange}
              required
              value={spot}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='coord'>
              Cordonnées<span> * </span>
            </label>
            <input
              id='coord'
              name='coord'
              onChange={handleChange}
              required
              value={coord}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='sport'>
              Sport<span> * </span>
            </label>
            <input
              id='sport'
              name='sport'
              onChange={handleChange}
              required
              value={sport}
            />
            <input id="favori" type="checkbox" name='favori?' 
            onChange={()=>setFavori(!favori)}></input>
          </div>
          <hr />
          <p>
            <span> * </span> required.
          </p>
          <div className='form-data'>
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default FormBis