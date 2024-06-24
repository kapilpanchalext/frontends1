import { useState } from "react";
import GameBoard from "./components/gameboard/GameBoard";
import Header from "./components/header/Header";
import Player from "./components/player/Player";
import Log from "./components/log/Log";
import { WINNING_COMBINATIONS } from "./components/winningcombinations/WinningCombinations";
import GameOver from "./components/gameover/GameOver";

export type GameTurn = {
  square: { row: number; col: number };
  player: string;
};

export type PlayerType = {
    X: string,
    O: string
}

const initialGameBoard: (string | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns: GameTurn[]) {
  let currentPlayer = "X";
  
  if(gameTurns.length > 0 && gameTurns[0].player === "X"){
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns: GameTurn[]){
  let gameBoard: (string | null)[][] = [...initialGameBoard.map(row => [...row])];

  for(const turn of gameTurns){
      const { square, player } = turn;
      const { row, col } = square;
      gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard: (string | null)[][], players: PlayerType) {
  let winner: string | undefined = undefined;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = players[firstSquareSymbol as keyof typeof players];
      break;
    }
  }
  return winner;
}

function App() {
  const[players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2'
  });

  const[gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer},
         ...prevTurns];
      return updatedTurns;
    });
  }

  const handleRestart = () => {
    setGameTurns([]);
  }

  const handlePlayerNameChange = (symbol: string, newName: string) => {
    setPlayers((prevState) => {
      return{...prevState, 
        [symbol]: newName
      };
    });
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className={'highlight-player'}>
            <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange} />
            <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange}/>
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;