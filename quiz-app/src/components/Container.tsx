// import ProgressBar from "./questions/ProgressBar";
import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../context/Questions-Context";
import Modal from "./Modal";

const TIMER = 10000;

export default function Container() {
  const { questions, nextQuiz, modal } = useContext(QuestionsContext);
  const [remainingTime, setRemainingTime] = useState<number>(TIMER);

  useEffect(() => {
    const remaining = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(remaining);
      setRemainingTime(TIMER);
    };
  }, [questions.id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!modal) {
        nextQuiz("");
      }
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [questions.id, modal]);

  return (
    <main className="w-1/2  bg-indigo-800 mx-auto rounded-lg p-6 text-indigo-200 shadow-2xl my-4">
      <progress className="w-full" value={remainingTime} max={TIMER}></progress>
      <ul>
        <li key={questions.id}>
          <h2>{questions.text}</h2>
          <ul className="text-indigo-900">
            {questions.answer?.map((answer) => {
              return (
                <li key={answer}>
                  <button
                    className="p-3 bg-indigo-300 m-2 rounded-2xl w-full"
                    onClick={() => nextQuiz(answer)}
                  >
                    {answer}
                  </button>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
      <Modal open={modal} />
    </main>
  );
}
