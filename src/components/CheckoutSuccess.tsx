import { CartContainer } from "@/features/cart-page/EmptyCart";
import SuccessIcon from "@/features/checkout-success-page/SuccessIcon";
import SubscribeToStore from "@/features/product-details-page/SubscribeToStore";
import { AddToCartButton } from "@/features/product-details-page/styles";
import { colours } from "@/utils/colours";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Footer from "./Footer";

const ContinueShoppingButton = styled(AddToCartButton)`
  margin-top: 2rem !important;
`;

const CheckoutSuccess = () => {
  return (
    <>
      <main>
        <CartContainer>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box marginTop="1rem">
              <SuccessIcon />
            </Box>
            <Typography
              variant="h4"
              color={colours.title}
              fontWeight={500}
              marginY="1rem"
            >
              Your order is completed!
            </Typography>
            <Typography variant="body1" color={colours.grey} align="center">
              Thank you for your order!
              <br />
              Your order is being processed and will be completed within 3-6
              hours.
              <br />
              You will receive an email confirmation when your order is
              completed.
            </Typography>
            <ContinueShoppingButton>Continue shopping</ContinueShoppingButton>
          </Box>
        </CartContainer>
        <SubscribeToStore />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default CheckoutSuccess;
