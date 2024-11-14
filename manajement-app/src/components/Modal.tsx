import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

type Props = {
  children: ReactNode;
  buttonCaption: string;
};

export interface ResultModalRef {
  open: () => void;
}

const Modal = forwardRef<ResultModalRef, Props>(
  ({ children, buttonCaption }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
      return {
        open() {
          if (dialog.current) {
            dialog.current.showModal();
          }
        },
      };
    });

    return createPortal(
      <dialog
        ref={dialog}
        className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      >
        {children}
        <form method="dialog" className="mt-4 text-right">
          <Button>{buttonCaption}</Button>
        </form>
      </dialog>,
      document.getElementById("modal-root") as HTMLElement
    );
  }
);

export default Modal;
