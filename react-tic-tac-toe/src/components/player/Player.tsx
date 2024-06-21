import { useState } from 'react'

type Props = {
    initialName: string,
    symbol: string,
    isActive: boolean,
}

const Player = ({initialName, symbol, isActive}: Props) => {

    const[isEditing, setIsEditing] = useState(false);
    const[playerName, setPlayerName] = useState(initialName);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value);
    };

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing){
        editablePlayerName = <input type='text' required value={playerName} onChange={handleNameChange}/>
    }

    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
    }

  return (
    <>
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing? "Save" : "Edit"}</button>
        </li>
    </>
  )
}

export default Player;