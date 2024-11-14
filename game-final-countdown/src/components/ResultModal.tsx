import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  result: number;
  targetTime: number;
  onChange: () => void;
};

export interface ResultModalRef {
  open: () => void;
}

const ResultModal = forwardRef<ResultModalRef, Props>(function ResultModal(
  { result, targetTime, onChange }: Props,
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  const userLost: boolean = result <= 0;
  const fomattedRemainingTime: string = (result / 1000).toFixed(2);
  const score = Math.round((1 - result / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
  }));
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onChange}>
      {userLost && <h2>You Lost!</h2>}
      {!userLost && <h2>You Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{fomattedRemainingTime} second left.</strong>
      </p>
      <form method="dialog" onChange={onChange}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
});

export default ResultModal;
