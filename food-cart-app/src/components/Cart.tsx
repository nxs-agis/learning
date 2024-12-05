import { useContext } from "react";
import Modal from "./UI/Modal";
import cartContext from "../context/CartContext";
import { currencyFormatter } from "../utils/formating";
import Button from "./UI/Button";
import UserProgressContext from "../context/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { items, addItem, removeItem } = useContext(cartContext);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);

  const openModal = progress === "cart";

  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * +item.price;
  }, 0);

  return (
    <Modal
      className="cart"
      open={openModal}
      onClose={openModal ? hideCart : undefined}
    >
      <h2>Your Chart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={+item.price}
            onIncrease={() => addItem(item)}
            onDecrease={() => removeItem(item.id)}
          />
        ))}
      </ul>

      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={showCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
