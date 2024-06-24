import React from 'react'

type Props = {
    winner?: string;
    onRestart: any;
}

const GameOver = ({ winner, onRestart }: Props) => {
  return (
    <div id="game-over">
        <h2>Game Over</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>It's a draw!</p>}
        <p>
            <button onClick={onRestart}>Rematch!</button>
        </p>
    </div>
  )
}

export default GameOver;