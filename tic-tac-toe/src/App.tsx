import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

type Turn = {
  square: { row: number; col: number };
  player: string;
};

type PlayerName = {
  X: string;
  O: string;
};

type PlayerSymbol = "X" | "O";

const initialGame = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function deriveActivePlayer(gameTurns: Turn[]) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

export default function App() {
  const [playerName, setPlayerName] = useState<PlayerName>({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);

  const activatePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGame.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner: string = "";
  for (const combinations of WINNING_COMBINATIONS) {
    const first: string =
      gameBoard[combinations[0].row][combinations[0].column];
    const second: string =
      gameBoard[combinations[1].row][combinations[1].column];
    const third: string =
      gameBoard[combinations[2].row][combinations[2].column];

    if (first && first === second && first === third) {
      winner = playerName[first as PlayerSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameTurns((prev: Turn[]) => {
      const currentPlayer = deriveActivePlayer(prev);

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ];

      return updateTurns;
    });
  }

  function handlerRematch() {
    setGameTurns([]);
  }

  function handlerPlayerNameChange(symbol: string, newName: string) {
    setPlayerName((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activatePlayer === "X"}
            onChangeName={handlerPlayerNameChange}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activatePlayer === "O"}
            onChangeName={handlerPlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRematch={handlerRematch} />
        )}

        <GameBoard onTurn={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
