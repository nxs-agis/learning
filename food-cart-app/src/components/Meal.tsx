import { useContext } from "react";
import { currencyFormatter } from "../utils/formating";
import Button from "./UI/Button";
import cartContext from "../context/CartContext";
import { CartType } from "../types/CartType";

type Props = {
  data: CartType;
};

export default function Meal({ data }: Props) {
  const { addItem } = useContext(cartContext);

  return (
    <li key={data.id} className="meal-item">
      <article>
        <img src={`http://localhost:3000/${data.image}`} alt={data.name} />
        <div>
          <h3>{data.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(parseFloat(data.price))}
          </p>
          <p className="meal-item-description">{data.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => addItem(data)}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
