import { useCart } from "@/context/CartContext"
import EmptyCart from "@/features/cart-page/EmptyCart"
import ShoppingCart from "@/features/cart-page/ShoppingCart";

const Cart = () => {
    const { cartItems, cartQuantity } = useCart();
    
    return (
      <>
        {
          cartQuantity > 0 ? 
            <ShoppingCart/>:
            <EmptyCart/>
        }
      </>
    )
  }

export default Cart