import { useState } from "react";

function UseState() {
  const [state, setState] = useState({ count: 0, name: "hello world" });
  const { count, name } = state;

  return (
    <>
      <div>
        <button
          onClick={() =>
            setState((prev) => ({ ...prev, count: prev.count + 1 }))
          }
        >
          decrement
        </button>
        <span>{count}</span>
        <span>{name}</span>
        <button
          onClick={() =>
            setState((prev) => ({ ...prev, count: prev.count - 1 }))
          }
        >
          increment
        </button>
      </div>
    </>
  );
}

export default UseState;
