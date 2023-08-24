import { CartItem } from "@/features/cart-page/types";
import {
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from "react";

type CartContextType = {
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  setQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  cartItems: CartItem[];
  cartQuantity: number;
};

type CartActions =
  | { type: "INCREASE_QUANTITY"; id: number }
  | { type: "SET_QUANTITY"; id: number; quantity: number }
  | { type: "REMOVE_ITEM"; id: number };

const CartContext = createContext({} as CartContextType);

export const useCart = () => {
  return useContext(CartContext);
};

const reducer = (state: CartItem[], action: CartActions) => {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      return state.find((item) => item.id === action.id)
        ? state.map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state, { id: action.id, quantity: 1 }];
    case "SET_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, dispatch] = useReducer(reducer, [], () => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseQuantity = (id: number) => {
    dispatch({ type: "INCREASE_QUANTITY", id });
  };
  const setQuantity = (id: number, quantity: number) => {
    dispatch({ type: "SET_QUANTITY", id, quantity });
  };
  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        setQuantity,
        removeItem,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
