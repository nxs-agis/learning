import { createContext, ReactNode, useReducer } from "react";
import { CartType } from "../types/CartType";

type Props = {
  children: ReactNode;
};

enum ACTION {
  "ADD_ITEM",
  "REMOVE_ITEM",
  "CLEAR_CART",
}

type CartState = {
  items: CartType[];
};

type CartAction =
  | { type: ACTION.ADD_ITEM; item: CartType }
  | { type: ACTION.REMOVE_ITEM; id: string }
  | { type: ACTION.CLEAR_CART };

type CartContextType = {
  items: CartType[];
  addItem: (item: CartType) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const cartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case ACTION.ADD_ITEM: {
      const exist = state.items.findIndex((item) => item.id === action.item.id);

      const updatedItems = [...state.items];
      if (exist > -1) {
        const existingItem = state.items[exist];

        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };

        updatedItems[exist] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, items: updatedItems };
    }

    case ACTION.REMOVE_ITEM: {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      const updatedItems = [...state.items];
      const existingItem = updatedItems[existingIndex];

      if (existingItem.quantity === 1) {
        updatedItems.splice(existingIndex, 1);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems[existingIndex] = updatedItem;
      }

      return { ...state, items: updatedItems };
    }

    case ACTION.CLEAR_CART: {
      return { ...state, items: [] };
    }

    default:
      return state;
  }
}

export function CartContextProvider({ children }: Props) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item: CartType) {
    dispatchCartAction({ type: ACTION.ADD_ITEM, item });
  }

  function removeItem(id: string) {
    dispatchCartAction({ type: ACTION.REMOVE_ITEM, id });
  }

  function clearCart() {
    dispatchCartAction({ type: ACTION.CLEAR_CART });
  }

  const ctxValue = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <cartContext.Provider value={ctxValue}>{children}</cartContext.Provider>
  );
}

export default cartContext;
