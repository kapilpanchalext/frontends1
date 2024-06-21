import { useState } from "react";
import GameBoard from "./components/gameboard/GameBoard";
import Header from "./components/header/Header";
import Player from "./components/player/Player";

function App() {

  const[activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((currActivePlayer) => currActivePlayer === "X" ? "O" : "X");
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className={'highlight-player'}>
            <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer === "X"} />
            <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer === "O"} />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
        </div>
      </main>
    </>
  );
}

export default App;