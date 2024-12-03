import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Meal from "./components/Meal";
import { getMeals } from "./http";
import { MealTypes } from "./types/MealsTypes";
import ModalChart, { ModalChartRef } from "./components/ModalCart";
import { CartType } from "./types/CartType";

function App() {
  const [meal, setMeal] = useState<MealTypes[]>();
  const [cart, setChart] = useState<CartType[]>([]);
  const dialog = useRef<ModalChartRef>(null);

  useEffect(() => {
    async function fecthMeal() {
      const getFecth = await getMeals();
      setMeal(getFecth);
    }

    fecthMeal();
  }, []);

  function addItem(name: string, price: number) {
    setChart((prev) => {
      const exist = prev.find((item) => item.name === name);

      if (exist) {
        return prev.map((item) =>
          item.name === name ? { ...item, total: item.total + 1 } : item
        );
      }
      return [...prev, { name, price, total: 1 }];
    });

    console.log(cart);
  }

  function openCart() {
    dialog.current?.open();
  }

  function closeCart() {
    dialog.current?.close();
  }

  return (
    <>
      <Header cart={cart ? cart.length : 0} handlerCart={openCart} />
      <main>
        <ModalChart ref={dialog} cart={cart} onClose={closeCart} />
        <div id="meals">
          {meal?.map((data) => (
            <Meal key={data.id} data={data} onAdd={addItem} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
