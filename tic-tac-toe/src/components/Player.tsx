import { useState } from "react";

interface Props {
  name: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (symbol: string, inputName: string) => void;
}

export default function Player({
  name,
  symbol,
  isActive,
  onChangeName,
}: Props) {
  const [openForm, setOpenform] = useState(false);
  const [inputName, setInputName] = useState(name);

  function handlerInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputName(event.target.value);
  }

  function handlerEdit() {
    setOpenform((prev) => !prev);

    if (openForm) {
      onChangeName(symbol, inputName);
    }
  }

  let inputForm = (
    <input
      type="text"
      name="name"
      id="name"
      value={inputName}
      onChange={handlerInput}
    />
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {openForm ? (
          inputForm
        ) : (
          <span className="player-name">{inputName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handlerEdit}>{openForm ? "Save" : "Edit"}</button>
    </li>
  );
}
