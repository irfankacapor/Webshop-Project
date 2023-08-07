import {
  Box,
  Button,
  CardMedia,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import styled from "styled-components";
import { colours } from "@/utils/colours";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/utils/helpers";

export const StyledStarIcon = styled(StarIcon)`
  width: 16px !important;
  height: 16px !important;
`;

export const StyledCardMedia = styled(({ ...props }) => (
  <CardMedia role="img" {...props} />
))`
  height: 320px;
  overflow: hidden;
  position: relative;
  background-color: transparent;
  border-radius: 8px;
`;

export const FavouriteIconContainer = styled(Box)`
  background-color: ${colours.white};
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-sizing: border-box;
  object-fit: contain;
  height: 52px;
  width: 52px;
  cursor: pointer !important;
`;

export const ProductCaption = styled(({ ...props }) => (
  <Typography variant="body1" {...props} />
))`
  color: ${colours.title} !important;
  text-transform: uppercase;
  font-weight: 600 !important;
  text-overflow: ellipsis;
`;

const ProductButtons = styled(({ ...props }) => (
  <Button variant="contained" size="large" {...props} />
))`
  min-width: 4rem !important;
  width: 100%;
  transition-property: box-shadow;
  box-shadow: ${colours.lightshadow} 0px 12px 15px !important;
  padding: 10px 22px !important;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const SeeDetailsButton = styled(({ ...props }) => (
  <Button
    variant="text"
    fullWidth
    size="large"
    component={Link}
    endIcon={<KeyboardArrowRightRoundedIcon />}
    {...props}
  />
))`
  text-transform: none !important;
  display: flex;
  justify-content: space-between !important;
  align-items: center;
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

const ProductCard = ({
  thumbnail,
  title,
  price,
  rating,
  id,
}: {
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
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
        <Box marginTop="1rem" display="flex" justifyContent="space-between">
          <ProductCaption noWrap>{title}</ProductCaption>
          <ProductCaption paddingLeft="8px">
            {formatCurrency(price)}
          </ProductCaption>
        </Box>
        <Box marginTop="0.25rem">
          <CreateStars rating={rating} />
        </Box>
        <Stack marginTop="1rem" display="flex" flexDirection={"row"}>
          <ProductButtons
            component={Link}
            href="/cart"
            onClick={() => increaseQuantity(id)}
          >
            <ShoppingCartIcon sx={{ color: "white" }} />
          </ProductButtons>
          <ProductButtons
            component={Link}
            sx={{
              backgroundColor: colours.extralightgrey,
              marginLeft: "0.5rem",
              "&:hover": { backgroundColor: colours.extralightblue },
            }}
            href={`/products/product-details/${id}`}
          >
            <VisibilityIcon color="primary" />
          </ProductButtons>
        </Stack>
        <SeeDetailsButton href={`/products/product-details/${id}`}>
          <Typography>See the details</Typography>
        </SeeDetailsButton>
      </Paper>
    </Box>
  );
};

export default ProductCard;
