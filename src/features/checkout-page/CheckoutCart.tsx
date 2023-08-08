import { useCart } from "@/context/CartContext";
import CheckoutCartItem from "./CheckoutCartItem";
import { Divider } from "@mui/material";
import styled from "styled-components";

const StyledDivider = styled(Divider)`
  margin-top: 2rem !important;
  margin-bottom: 2rem !important;
`;

const CheckoutCart = () => {
  const { cartItems } = useCart();

  return (
    <>
      {cartItems.map((item, index) => {
        return (
          <>
            <CheckoutCartItem id={item.id} key={item.id} />
            {index < cartItems.length - 1 && <StyledDivider />}
          </>
        );
      })}
    </>
  );
};

export default CheckoutCart;
