import { useState } from 'react';
import './dice.css';

function getRandomNum(upperLimit) {
  return Math.ceil(Math.random() * upperLimit);
}


function Die(props) {
  const {sides} = props

  const [rolled, setRolled] = useState('?')

  const roll = () => {
    setRolled(getRandomNum(sides))
  }

  return(
    <button onClick={roll} className='die'>
      <i>sides={sides}</i>
      <b>{rolled}</b>
    </button>
  )
}

export default Die