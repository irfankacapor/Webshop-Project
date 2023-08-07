import { Box, Button, Divider, Typography } from "@mui/material";
import styled from "styled-components";
import { colours } from "@/utils/colours";
import { CreateStars } from "@/features/products-page/ProductCard";
import { DetailsProps } from "./types";
import { AddToCartButton } from "./styles";
import ContactUs from "@/features/product-details-page/ContactUs";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/utils/helpers";

const AddToFavoriteButton = styled(({ ...props }) => (
  <Button variant="outlined" size="large" fullWidth {...props}>
    Add to Favorite
  </Button>
))`
  box-sizing: border-box;
  text-transform: none !important;
  padding: 10px 22px !important;
  border-radius: 5px !important;
  font-weight: 300 !important;
`;

export const ProductDetailsText = ({ details }: { details: DetailsProps }) => {
  const {increaseQuantity} = useCart();
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="body1"
          noWrap
          color={colours.title}
          fontWeight="600"
        >
          {details.title}
        </Typography>
        <Typography
          variant="body1"
          noWrap
          color={colours.title}
          fontWeight="600"
        >{`${formatCurrency(details.price)}`}</Typography>
      </Box>
      <Box display="flex" alignItems="center" marginTop="1rem">
        <Typography variant="body1" color={colours.grey} marginRight="0.5rem">
          {details.rating}
        </Typography>
        <CreateStars rating={details.rating} />
      </Box>
      <Box marginTop="2rem">
        <AddToCartButton onClick={() => increaseQuantity(details.id)} href="/cart">Add to cart</AddToCartButton>
      </Box>
      <Box marginTop="2rem">
        <Typography variant="body1" color={colours.title} marginBottom="0.5rem">
          Description
        </Typography>
        <Typography variant="subtitle2" color={colours.grey} fontWeight="300">
          {details.description}
        </Typography>
      </Box>
      <Divider sx={{ marginY: "2rem" }} />
      <Box>
        <AddToFavoriteButton />
      </Box>
      <ContactUs />
    </Box>
  );
};
