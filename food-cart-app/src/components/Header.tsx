import IMAGE from "../assets/logo.jpg";

type Props = {
  cart?: number;
  handlerCart: () => void;
};

export default function Header({ cart, handlerCart }: Props) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={IMAGE} alt="food-logo" />
        <h1>REACT FOOD</h1>
      </div>
      <button onClick={handlerCart}>Cart({cart})</button>
    </header>
  );
}
