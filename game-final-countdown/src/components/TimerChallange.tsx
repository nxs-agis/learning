import { useRef, useState } from "react";
import ResultModal, { ResultModalRef } from "./ResultModal";

type Props = {
  title: string;
  targetTime: number;
};

export default function TimerChallange({ title, targetTime }: Props) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef<number>();
  const dialog = useRef<ResultModalRef>(null);

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);

    dialog.current?.open();
  }

  function onReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handlerStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }

  function handlerStop() {
    dialog.current?.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        result={timeRemaining}
        onChange={onReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handlerStop : handlerStart}>
            {timeIsActive ? "Start" : "Stop"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is running..." : "Time inactive"}
        </p>
      </section>
    </>
  );
}
