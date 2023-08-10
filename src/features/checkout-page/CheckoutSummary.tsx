import { Box, Stack, TextField } from "@mui/material";
import { SummaryPaper } from "../cart-page/OrderSummary";
import styled from "styled-components";
import { colours } from "@/utils/colours";
import CheckoutCart from "./CheckoutCart";
import { AddToCartButton } from "@/features/product-details-page/styles";
import OrderPricing from "@/features/cart-page/OrderPricing";
import { ContactButton } from "@/features/product-details-page/ContactUs";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const CheckoutSummaryPaper = styled(SummaryPaper)`
  background-color: #ffffff !important;
`;

const ApplyButton = styled(AddToCartButton)`
  min-width: 4rem !important;
  width: 100% !important;
  max-width: 90px;
`;

const CheckoutSummary = () => {
  return (
    <>
      <CheckoutSummaryPaper>
        <Box>
          <CheckoutCart />
          <form>
            <Box display="flex" marginY="2rem">
              <TextField
                label="Discount code"
                variant="outlined"
                fullWidth
                sx={{ marginRight: "0.5rem" }}
              />
              <ApplyButton>Apply</ApplyButton>
            </Box>
          </form>
          <Stack display="flex" flexDirection="column" marginY="2rem">
            <OrderPricing />

            <AddToCartButton
              fullWidth
              form="shipping-information-form"
              type="submit"
            >
              Place an order
            </AddToCartButton>
          </Stack>
        </Box>
        <Box
          sx={{ backgroundColor: colours.lightgrey }}
          margin="0 -2rem -2rem -2rem"
          padding="2rem"
        >
          <Stack display="flex" flexDirection="row" marginTop="0.25rem">
            <ContactButton startIcon={<LocalPhoneIcon />}>
              Contact sales
            </ContactButton>
            <ContactButton startIcon={<EmailRoundedIcon />} marginleft="1rem">
              Email us
            </ContactButton>
          </Stack>
        </Box>
      </CheckoutSummaryPaper>
    </>
  );
};

export default CheckoutSummary;
