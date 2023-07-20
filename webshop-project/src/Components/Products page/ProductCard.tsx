import {
  Box,
  Button,
  CardMedia,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { colours } from "../../Constants/colours";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export interface ProductCardProps {
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
}

const StyledStarIcon = styled(StarIcon)`
  width: 16px !important;
  height: 16px !important;
`;

const StyledCardMedia = styled(({ ...props }) => (
  <CardMedia role="img" {...props} />
))`
  height: 320px;
  overflow: hidden;
  position: relative;
  background-color: transparent;
  border-radius: 8px;
`;

const FavouriteIconContainer = styled(Box)`
  background-color: white;
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

const ProductCaption = styled(({ ...props }) => (
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
  box-shadow: rgba(140, 152, 164, 0.1) 0px 12px 15px !important;
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

const CreateStar = (props: { rating: number; index: number }) => (
  <StyledStarIcon
    sx={{
      color: props.index <= props.rating ? colours.yellow : "rgba(0,0,0,0.12)",
    }}
  />
);

const Rating = (props: { rating: number }) => {
  const stars = [];

  let rating = Math.round(props.rating);

  for (let i = 1; i <= 5; i++) {
    stars.push(<CreateStar key={i} index={i} rating={rating} />);
  }
  return (
    <Box display="flex" alignItems="center" boxSizing={"border-box"}>
      {stars}
    </Box>
  );
};

const ProductCard = (props: ProductCardProps) => {
  return (
    <Box width="100%" height="100%">
      <Paper elevation={0}>
        <StyledCardMedia
          style={{
            backgroundImage: `url(${props.thumbnail})`,
            backgroundColor: "transparent",
          }}
        >
          <FavouriteIconContainer>
            <FavoriteBorderOutlinedIcon
              sx={{ width: "20px", height: "20px" }}
            />
          </FavouriteIconContainer>
        </StyledCardMedia>
        <Box marginTop="1rem" display="flex" justifyContent="space-between">
          <ProductCaption noWrap>{props.title}</ProductCaption>
          <ProductCaption>${props.price}</ProductCaption>
        </Box>
        <Box marginTop="0.25rem">
          <Rating rating={props.rating} />
        </Box>
        <Stack marginTop="1rem" display="flex" flexDirection={"row"}>
          <ProductButtons>
            <ShoppingCartIcon sx={{ color: "white" }} />
          </ProductButtons>
          <ProductButtons
            sx={{
              backgroundColor: "rgba(70, 125, 227, 0.1)",
              marginLeft: "0.5rem",
              "&:hover": { backgroundColor: "rgba(55, 125, 255, 0.043)" },
            }}
          >
            <VisibilityIcon color="primary" />
          </ProductButtons>
        </Stack>
        <SeeDetailsButton href="/products">
          <Typography>See the details</Typography>
        </SeeDetailsButton>
      </Paper>
    </Box>
  );
};

export default ProductCard;
