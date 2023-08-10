/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCart } from "@/context/CartContext";
import { colours } from "@/utils/colours";
import { calculateCartSubtotal, formatCurrency } from "@/utils/helpers";
import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const OrderPricing = () => {
  const { cartItems } = useCart();
  const [VAT, setVAT] = useState(20);
  const [discount, setDiscount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const totalTax = (VAT / 100) * subtotal;

  useEffect(() => {
    calculateCartSubtotal(cartItems).then((value) => setSubtotal(value));
  }, [cartItems]);
  return (
    <>
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
    </>
  );
};

export default OrderPricing;
