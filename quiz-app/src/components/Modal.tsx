import { useContext, useEffect, useRef } from "react";
import { QuestionsContext } from "../context/Questions-Context";
import { createPortal } from "react-dom";
import ResultValue from "./ResultValue";

type Props = {
  open: boolean;
};

export default function Modal({ open }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const { final, grade, restart } = useContext(QuestionsContext);

  useEffect(() => {
    if (dialog.current) {
      if (open) {
        dialog.current.showModal();
      } else {
        dialog.current.close();
      }
    }
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className="w-fit drop-shadow-xl rounded-lg outline-2 bg-indigo-900 text-center p-5"
    >
      <div className="flex justify-evenly text-white m-4">
        <ResultValue text="Right" grade={grade?.right.toFixed(1)} />
        <ResultValue text="Wrong" grade={grade?.wrong.toFixed(1)} />
        <ResultValue text="Empty" grade={grade?.empty.toFixed(1)} />
      </div>

      {final.map((answer) => (
        <li key={answer.id} className="list-none m-4 text-white">
          <p className="font-semibold">Your Answer</p>
          {answer.answer === "" ? (
            <p className={`${answer.color}`}>You didn't answer it</p>
          ) : (
            <p className={`${answer.color}`}>{answer.answer}</p>
          )}

          <p className="font-semibold">Right Answer</p>
          <p className={`${answer.color}`}>{answer.rightAnswer}</p>
        </li>
      ))}

      <button
        className="bg-green-500 py-2 px-5 rounded-lg float-end hover:text-white hover:bg-green-700"
        onClick={restart}
      >
        Restart
      </button>
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
}
