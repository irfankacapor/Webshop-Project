import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";

const CartItems = () => {
  const { cartItems } = useCart();

  return (
    <>
      {cartItems.map((item) => {
        return <CartItem id={item.id} key={item.id} />;
      })}
    </>
  );
};

export default CartItems;
