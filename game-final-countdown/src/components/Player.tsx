import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const playerName = useRef<HTMLInputElement>(null);

  function handlerClick() {
    if (playerName.current) {
      setEnteredPlayerName(playerName.current.value);
      playerName.current.value = "";
    }
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName || "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handlerClick}>Set Name</button>
      </p>
    </section>
  );
}
