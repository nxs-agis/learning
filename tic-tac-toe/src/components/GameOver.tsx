type Props = {
  winner: string;
  onRematch: () => void;
};

export default function GameOver({ winner, onRematch }: Props) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a Draw!</p>}

      <p>
        <button onClick={onRematch}>Rematch!</button>
      </p>
    </div>
  );
}
