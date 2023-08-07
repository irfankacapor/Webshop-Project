import { Box, CardContent, Typography } from "@mui/material";
import {
  ProductContainer,
  StyledIconButton,
  StyledStarIcon,
  StyledFavouriteIcon,
  StyledCardActions,
  StyledCardMedia,
  AddToCartButton,
  ImageContainer,
} from "@/features/homepage/styles";
import { ProductProps } from "./types";

const Product = (props: ProductProps) => (
  <Box display="block" width="100%" height="100%">
    <ProductContainer elevation={1}>
      <Box>
        <ImageContainer>
          <StyledCardMedia image={props.image} />
          <Box>
            <StyledIconButton>
              <StyledFavouriteIcon />
            </StyledIconButton>
          </Box>
        </ImageContainer>
      </Box>
      <CardContent>
        <Typography variant="h6" align="left">
          {props.title}
        </Typography>
        <Box display="flex" alignContent="left" margin="0.5rem 0 0.5rem">
          <Box display="flex" flexDirection="row">
            <Box>
              <StyledStarIcon />
            </Box>
            <Box>
              <StyledStarIcon />
            </Box>
            <Box>
              <StyledStarIcon />
            </Box>
            <Box>
              <StyledStarIcon />
            </Box>
            <Box>
              <StyledStarIcon />
            </Box>
          </Box>
        </Box>
        <StyledCardActions>
          <Typography variant="body1" color="primary">
            {props.price}
          </Typography>
          <AddToCartButton>Add to cart</AddToCartButton>
        </StyledCardActions>
      </CardContent>
    </ProductContainer>
  </Box>
);

export default Product;