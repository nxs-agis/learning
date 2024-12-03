import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { CartType } from "../types/CartType";

type Props = {
  cart?: CartType[];
  onClose: () => void;
};

export interface ModalChartRef {
  open: () => void;
  close: () => void;
}

const ModalChart = forwardRef<ModalChartRef, Props>(function ModalChart(
  { cart, onClose },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
    close() {
      if (dialog.current) {
        dialog.current.close();
      }
    },
  }));

  return createPortal(
    <dialog ref={dialog} onClose={onClose} className="cart">
      <h2>Your Cart</h2>
      <ul className="modal-action">
        {cart &&
          cart.map((data) => (
            <li key={data.name} className="cart-item">
              <p>
                {data.name} - {data.total} x {data.price}
              </p>

              <div className="cart-item-actions">
                <button>-</button>
                <p>{data.total}</p>
                <button>+</button>
              </div>
            </li>
          ))}
      </ul>
    </dialog>,
    document.getElementById("modal-cart") as HTMLElement
  );
});

export default ModalChart;
