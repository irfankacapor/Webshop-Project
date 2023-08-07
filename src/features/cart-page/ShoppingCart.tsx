import Footer from "@/components/Footer";
import { Box, Divider, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import CartItems from "@/features/cart-page/CartItems";
import OrderSummary from "./OrderSummary";

const CartContainer = styled(Box)`
  margin-top: 2rem;
  box-sizing: border-box !important;
  padding: 2rem 1rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 600px) {
    max-width: 720px;
    padding: 3rem 1rem;
  }
  @media (min-width: 900px) {
    max-width: 1236px;
    padding: 4rem 1rem;
  }
`;

const ShoppingCart = () => {
  return (
    <>
      <main>
        <CartContainer>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" marginBottom="2rem">
                Shopping cart
              </Typography>
              <Box>
                <CartItems />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <OrderSummary />
            </Grid>
          </Grid>
        </CartContainer>
        <Divider />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ShoppingCart;
