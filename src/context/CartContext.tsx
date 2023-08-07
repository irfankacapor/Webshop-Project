import { CartItem } from "@/features/cart-page/types";
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type CartContextType = {
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  setQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  cartItems: CartItem[];
  cartQuantity: number;
};

const CartContext = createContext({} as CartContextType);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      return JSON.parse(savedCartItems);
    }
    return [];
  });


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === id) == null) {
        return [...prevItems, { id, quantity: 1 }];
      } else {
        return prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const setQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        return item.id === id ? {...item, quantity: quantity} : item
      });
    });
  };
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
