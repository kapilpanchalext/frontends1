import React, { useRef, useState } from 'react'

type Props = {}

const Players = (props: Props) => {

    const playerName = useRef<HTMLInputElement>(null);
    const[enteredPlayerName, setEnteredPlayerName] = useState('unknown entity');

    const handleClick = () => {
      if(playerName.current){
        setEnteredPlayerName(playerName.current.value);
      }
    };

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'unknown entity' }</h2>
      <p>
        <input
            type="text" 
            ref={ playerName } 
            />
        <button onClick={ handleClick }>Set Name</button>
      </p>
    </section>
  )
}

export default Players;