type Square = string;
type GameBoardProps = {
  onTurn: (rowIndex: number, colIndex: number) => void;
  board: Square[][];
};

export default function GameBoard({ onTurn, board }: GameBoardProps) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onTurn(rowIndex, colIndex)}
                  disabled={cell !== ""}
                >
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
