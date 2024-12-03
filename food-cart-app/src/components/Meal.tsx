import { MealTypes } from "../types/MealsTypes";

type Props = {
  data: MealTypes;
  onAdd: (name: string, price: number) => void;
};

export default function Meal({ data, onAdd }: Props) {
  return (
    <div key={data.id} className="meal-item">
      <img src={`http://localhost:3000/${data.image}`} alt={data.name} />
      <h3>{data.name}</h3>
      <p className="meal-item-price">{data.price}</p>
      <p className="meal-item-description">{data.description}</p>
      <button
        className="meal-item-action"
        onClick={() => onAdd(data.name, +data.price)}
      >
        Add to Chart
      </button>
    </div>
  );
}
