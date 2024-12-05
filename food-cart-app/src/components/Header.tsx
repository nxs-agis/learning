import { useContext } from "react";
import IMAGE from "../assets/logo.jpg";
import Button from "./UI/Button";
import cartContext from "../context/CartContext";
import UserProgressContext from "../context/UserProgressContext";

export default function Header() {
  const { items } = useContext(cartContext);
  const { showCart } = useContext(UserProgressContext);

  const total = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={IMAGE} alt="food-logo" />
        <h1>REACT FOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={showCart}>
          Cart({total})
        </Button>
      </nav>
    </header>
  );
}
