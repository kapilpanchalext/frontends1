import React, { useRef, useState } from 'react'

type Props = {}

const Players = (props: Props) => {

    const playerName = useRef();

    const[enteredPlayerName, setEnteredPlayerName] = useState('unknown entity');
    const[submitted, setSubmitted] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubmitted(false);
        setEnteredPlayerName(event.target.value);
    };

    const handleClick = () => {
        setEnteredPlayerName(playerName.current.value);
    }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input type="text" 
            ref={playerName} 
            onChange={handleChange} 
            value={enteredPlayerName}
            />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  )
}

export default Players;