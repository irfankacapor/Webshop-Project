import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import { colours } from "../../Constants/colours";
import styled from "styled-components";

const BannerContainer = styled(Box)`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem !important;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.2rem;
  @media (min-width: 600px) {
    max-width: 720px;
    padding: 1.25rem 1rem !important;
  }

  @media (min-width: 900px) {
    max-width: 1236px;
  }
`;

const ProductListingBanner = () => {
  return (
    <Box sx={{ backgroundColor: colours.lightgrey }}>
      <BannerContainer>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="body1" color={colours.title}>
            Product listing
          </Typography>
          <Breadcrumbs>
            <Link color={colours.blue} underline="hover" href="/">
              Home
            </Link>
            <Link color={colours.title} underline="none" href="/products">
              Products
            </Link>
          </Breadcrumbs>
        </Box>
      </BannerContainer>
    </Box>
  );
};

export default ProductListingBanner;
