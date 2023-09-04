import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { colours } from "@/utils/colours";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/utils/helpers";
import {
  FavouriteIconContainer,
  ProductButtons,
  ProductCaption,
  SeeDetailsButton,
  StyledCardMedia,
  StyledStarIcon,
} from "./styles";

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
