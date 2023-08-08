import { CartContainer } from "@/features/cart-page/ShoppingCart";
import CheckoutForm from "@/features/checkout-page/CheckoutForm";
import CheckoutSummary from "@/features/checkout-page/CheckoutSummary";
import { Grid } from "@mui/material";
import Footer from "./Footer";

const Checkout = () => {
  return (
    <>
      <main>
        <CartContainer>
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid item xs={12} md={7}>
              <CheckoutForm />
            </Grid>
            <Grid item xs={12} md={5}>
              <CheckoutSummary />
            </Grid>
          </Grid>
        </CartContainer>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Checkout;
