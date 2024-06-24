import React from 'react'
import { GameTurn } from '../../App';

type Props = {
  turns: GameTurn[];
}

const Log = ({ turns }: Props) => {
  return (
    <ol>
      {turns.map((turn) => {
        return (<li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row}, {turn.square.col}</li>)
      })}

    </ol>
  )
}

export default Log;