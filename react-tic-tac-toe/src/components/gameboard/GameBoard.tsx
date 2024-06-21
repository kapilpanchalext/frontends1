import React, { useState } from 'react'

type Props = {
    onSelectSquare: any;
    activePlayerSymbol: any;
}

const GameBoard = ({onSelectSquare, activePlayerSymbol}: Props) => {
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (rowIndex: number, colIndex: number) => {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });
        onSelectSquare();
    };

  return (
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (<li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>))}
            </ol>
        </li>
        ))}
    </ol>
  )
};

export default GameBoard;