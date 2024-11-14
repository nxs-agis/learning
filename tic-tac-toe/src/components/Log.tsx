type Square = { row: number; col: number };
type Turn = {
  square: Square;
  player: string;
};

type GameBoardProps = {
  turns: Turn[];
};

export default function Log({ turns }: GameBoardProps) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}-${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
