import { colours } from "@/utils/colours";
import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { AddToCartButton } from "@/features/product-details-page/styles";
import ContactUs from "@/features/product-details-page/ContactUs";
import { useCart } from "@/context/CartContext";
import { calculateCartSubtotal, formatCurrency } from "@/utils/helpers";
import { useEffect, useState } from "react";

const StyledPaper = styled(Paper)`
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
  const { cartItems } = useCart();
  const [VAT, setVAT] = useState(20);
  const [discount, setDiscount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    calculateCartSubtotal(cartItems).then((value) => setSubtotal(value));
  }, [cartItems]);

  const totalTax = (VAT / 100) * subtotal;
  return (
    <>
      <StyledPaper elevation={0}>
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
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" fontWeight={300} color={colours.grey}>
              Subtotal
            </Typography>
            <Typography variant="body1" color={colours.grey} fontWeight={500}>
              {formatCurrency(subtotal)}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" marginTop="1rem">
            <Typography variant="body1" fontWeight={300} color={colours.grey}>
              Discount
            </Typography>
            <Typography variant="body1" color={colours.grey} fontWeight={500}>
              -{formatCurrency(discount)}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" marginY="1rem">
            <Typography variant="body1" fontWeight={300} color={colours.grey}>
              VAT(+{VAT}%)
            </Typography>
            <Typography variant="body1" color={colours.grey} fontWeight={500}>
              {formatCurrency(totalTax)}
            </Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" marginY="1rem">
            <Typography variant="h6">Order total:</Typography>
            <Typography variant="h6">
              {formatCurrency(subtotal + discount + totalTax)}
            </Typography>
          </Box>
          <AddToCartButton>Checkout</AddToCartButton>
        </Stack>
      </StyledPaper>
      <Box marginTop="2rem">
        <ContactUs />
      </Box>
    </>
  );
};

export default OrderSummary;
