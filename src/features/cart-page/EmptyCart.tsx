import Footer from "@/components/Footer";
import { Box } from "@mui/system";
import styled from "styled-components";
import SubscribeToStore from "../product-details-page/SubscribeToStore";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { colours } from "@/utils/colours";
import { Button, Link, Typography } from "@mui/material";

export const EmptyCartContainer = styled(Box)`
  padding: 2rem 1rem;
  margin-left: auto !important;
  margin-right: auto !important;
  max-width: 600px !important;

  @media (min-width: 600px) {
    padding: 3rem 1rem;
  }

  @media (min-width: 900px) {
    padding: 4rem 1rem;
  }
`;

const StyledCartIcon = styled(ShoppingCartOutlinedIcon)`
  width: 150px !important;
  height: 150px !important;
  color: ${colours.emptycartgrey};
  box-sizing: border-box !important;
`;

const StartShoppingButton = styled(({ ...props }) => (
  <Button variant="contained" size="large" disableElevation {...props} />
))`
  margin-top: 2rem !important;
  min-width: 4rem;
  display: inline-flex;
  box-sizing: border-box;
  text-transform: none !important;
  background-color: ${colours.blue} !important;
  padding: 10px 22px !important;
  border-radius: 5px !important;
  font-weight: 300 !important;
  :hover {
    box-shadow: rgba(140, 152, 164, 0.176) 0px 10px 40px 10px !important;
  }
`;
const EmptyCart = () => {
  return (
    <>
      <main style={{ marginTop: "2rem" }}>
        <EmptyCartContainer>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box position="relative">
              <StyledCartIcon />
            </Box>
            <Typography variant="h6" align="center" color={colours.title}>
              Your cart is currently empty
            </Typography>
            <Typography variant="body1" align="center" color={colours.grey}>
              Before proceed to checkout you must add some products to your
              shopping cart. You will find a lot of interesting products on our
              page.
            </Typography>
            <StartShoppingButton component={Link} href="/products">
              {" "}
              Start shopping{" "}
            </StartShoppingButton>
          </Box>
        </EmptyCartContainer>
        <SubscribeToStore />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default EmptyCart;
