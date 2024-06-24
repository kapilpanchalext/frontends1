import React from 'react'

type Props = {
    winner?: string
}

const GameOver = ({ winner }: Props) => {
  return (
    <div id="game-over">
        <h2>Game Over</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>It's a draw!</p>}
        <p>
            <button >Rematch!</button>
        </p>
    </div>
  )
}

export default GameOver;