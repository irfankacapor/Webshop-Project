import { colours } from "@/utils/colours";
import {
  Box,
  Button,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { AddToCartButton } from "@/features/product-details-page/styles";
import ContactUs from "@/features/product-details-page/ContactUs";
import OrderPricing from "./OrderPricing";

export const SummaryPaper = styled(Paper)`
  padding: 2rem;
  border-radius: 8px !important;
  background-color: ${colours.lightgrey} !important;
  width: 100%;
  box-sizing: border-box;
`;

const ApplyDiscountButton = styled(({ ...props }) => (
  <Button variant="outlined" fullWidth {...props} />
))`
  text-transform: none !important;
  background-color: ${colours.mediumlightgrey} !important;
  color: ${colours.title} !important;
  padding: 11px 10px !important;
  border-radius: 5px !important;
  margin-top: 0.5rem !important;
  border: none !important;
  font-weight: 300 !important;
  &:hover {
    background-color: ${colours.extralightblue} !important;
  }
`;

const OrderSummary = () => {
  return (
    <>
      <SummaryPaper elevation={0}>
        <Typography variant="h6" marginBottom="2rem">
          Order summary
        </Typography>
        <Box marginY="2rem">
          <form>
            <TextField
              variant="outlined"
              placeholder="Discount code"
              fullWidth
            />
            <ApplyDiscountButton>Apply the code</ApplyDiscountButton>
          </form>
        </Box>
        <Stack display="flex" flexDirection="column" marginY="2rem">
          <OrderPricing />
          <Link underline="none" href="/checkout">
            <AddToCartButton fullWidth>Checkout</AddToCartButton>
          </Link>
        </Stack>
      </SummaryPaper>
      <Box marginTop="2rem">
        <ContactUs />
      </Box>
    </>
  );
};

export default OrderSummary;
