import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
import { colours } from "@/utils/colours";
import { AddToCartButton } from "@/features/product-details-page/styles";
import {
  FavouriteIconContainer,
  ProductCaption,
  StyledCardMedia,
  StyledStarIcon,
} from "@/features/products-page/ProductCard";
import { useCart } from "@/context/CartContext";

const QuickCartButton = styled(({ ...props }) => (
  <Button variant="text" fullWidth size="large" component={Link} {...props} />
))`
  text-transform: none !important;
  display: flex;
  font-weight: 300 !important;
  text-align: center;
  border-radius: 5px !important;
  padding: 10px 11px !important;
  color: ${colours.title} !important;
  width: 100%;
  margin-top: 0.5rem !important;
  & span {
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const CreateStars = (props: { rating: number }) => {
  const rating = Math.round(props.rating);
  const stars = Array(5).fill(0);

  return (
    <Box display="flex" alignItems="center" boxSizing={"border-box"}>
      {stars.map((_, index) => (
        <StyledStarIcon
          sx={{
            color:
              index + 1 <= rating ? colours.yellow : colours.mediumlightgrey,
          }}
          key={index}
        />
      ))}
    </Box>
  );
};

const SimilarProductCard = ({
  thumbnail,
  title,
  price,
  rating,
  description,
  id,
}: {
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
  description: string;
  id: number;
}) => {
  const { increaseQuantity } = useCart();
  return (
    <Box width="100%" height="100%">
      <Paper elevation={0}>
        <StyledCardMedia
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundColor: colours.transparent,
          }}
        >
          <FavouriteIconContainer>
            <FavoriteBorderOutlinedIcon
              sx={{ width: "20px", height: "20px" }}
            />
          </FavouriteIconContainer>
        </StyledCardMedia>

        <Box marginTop="1rem">
          <ProductCaption noWrap>{title}</ProductCaption>
          <Typography
            noWrap
            variant="subtitle2"
            color={colours.grey}
            fontWeight={400}
          >
            {description}
          </Typography>
        </Box>
        <Box marginTop="1rem" display="flex" justifyContent="space-between">
          <ProductCaption>${price}</ProductCaption>
          <CreateStars rating={rating} />
        </Box>
        <Stack marginTop="1rem" display="flex">
          <Link to="/cart">
            <AddToCartButton onClick={() => increaseQuantity(id)} fullWidth>
              <ShoppingCartIcon
                sx={{
                  color: "white",
                  marginRight: "0.5rem",
                  width: "20px",
                  height: "20px",
                }}
              />{" "}
              Add to cart
            </AddToCartButton>
          </Link>
          <Link to="cart">
            <QuickCartButton>Quick cart</QuickCartButton>
          </Link>
        </Stack>
      </Paper>
    </Box>
  );
};

export default SimilarProductCard;
