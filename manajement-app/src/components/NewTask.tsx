import { ChangeEvent, useState } from "react";

type Props = {
  onAdd: (data: string) => void;
};

export default function NewTask({ onAdd }: Props) {
  const [enteredTask, setEnteredTask] = useState("");

  function handlerChange(event: ChangeEvent<HTMLInputElement>) {
    setEnteredTask(event.target.value);
  }

  function handlerAdd() {
    setEnteredTask("");
    onAdd(enteredTask);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
        onChange={handlerChange}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handlerAdd}
      >
        Add Task
      </button>
    </div>
  );
}
