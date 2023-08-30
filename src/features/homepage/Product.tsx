import { Box, CardContent, Grid, Typography } from "@mui/material";
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
import { useTranslation } from "react-i18next";

const Product = () => {
  const { t } = useTranslation();
  const products = [
    {
      title: t("homepage.featured.product1"),
      image: "https://assets.maccarianagency.com/backgrounds/img37.png",
      price: "$320",
    },
    {
      title: t("homepage.featured.product2"),
      image: "https://assets.maccarianagency.com/backgrounds/img38.png",
      price: "$450",
    },
    {
      title: t("homepage.featured.product3"),
      image: "https://assets.maccarianagency.com/backgrounds/img39.png",
      price: "$280",
    },
    {
      title: t("homepage.featured.product4"),
      image: "https://assets.maccarianagency.com/backgrounds/img40.png",
      price: "$300",
    },
    {
      title: t("homepage.featured.product5"),
      image: "https://assets.maccarianagency.com/backgrounds/img41.png",
      price: "$280",
    },
    {
      title: t("homepage.featured.product6"),
      image: "https://assets.maccarianagency.com/backgrounds/img42.png",
      price: "$340",
    },
  ];
  return (
    <>
      {products.map((product: ProductProps, index) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="600"
            data-aos-offset="100"
            key={index * 31}
          >
            <Box display="block" width="100%" height="100%">
              <ProductContainer elevation={1}>
                <Box>
                  <ImageContainer>
                    <StyledCardMedia image={product.image} />
                    <Box>
                      <StyledIconButton>
                        <StyledFavouriteIcon />
                      </StyledIconButton>
                    </Box>
                  </ImageContainer>
                </Box>
                <CardContent>
                  <Typography variant="h6" align="left">
                    {product.title}
                  </Typography>
                  <Box
                    display="flex"
                    alignContent="left"
                    margin="0.5rem 0 0.5rem"
                  >
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
                      {product.price}
                    </Typography>
                    <AddToCartButton>
                      {t("homepage.featured.cart_button")}
                    </AddToCartButton>
                  </StyledCardActions>
                </CardContent>
              </ProductContainer>
            </Box>
          </Grid>
        );
      })}
    </>
  );
};

export default Product;
