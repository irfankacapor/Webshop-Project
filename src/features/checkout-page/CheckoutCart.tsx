import { useCart } from "@/context/CartContext";
import CheckoutCartItem from "./CheckoutCartItem";
import { Divider } from "@mui/material";
import styled from "styled-components";

const CheckoutCart = () => {
  const { cartItems } = useCart();

  return (
    <>
      {cartItems.map((item, index) => {
        return (
          <CheckoutCartItem
            id={item.id}
            key={item.id}
            divider={index < cartItems.length - 1}
          />
        );
      })}
    </>
  );
};

export default CheckoutCart;
