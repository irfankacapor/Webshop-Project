import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { colours } from "@/utils/colours";
import { BannerContainer } from "@/features/products-page/ProductListingBanner";

const ProductDetailsBanner = () => {
  return (
    <Box sx={{ backgroundColor: colours.lightgrey }}>
      <BannerContainer>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="body1" color={colours.title}>
            Product details
          </Typography>
          <Breadcrumbs>
            <Link color={colours.blue} underline="hover" href="/">
              Home
            </Link>
            <Link color={colours.blue} underline="none" href="/products">
              Listing
            </Link>
            <Link color={colours.title} underline="none">
              Product details
            </Link>
          </Breadcrumbs>
        </Box>
      </BannerContainer>
    </Box>
  );
};

export default ProductDetailsBanner;
