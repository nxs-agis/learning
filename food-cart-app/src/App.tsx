import Header from "./components/Header";
import Meal from "./components/Meal";
import { CartContextProvider } from "./context/CartContext";
import { UserProgressContextProvider } from "./context/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import useHttp from "./hooks/useHttp";
import Error from "./components/Error";

const requestConfig = {};

function App() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals... </p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <main>
          <ul id="meals">
            {loadedMeals?.map((data) => (
              <Meal key={data.id} data={data} />
            ))}
          </ul>
        </main>
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
