import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import Footer from "./Footer";
import { SectionContainer } from "@/features/homepage/styles";
import { colours } from "@/utils/colours";
import { AddToCartButton } from "@/features/product-details-page/styles";

const NotFound = () => {
  return (
    <>
      <main>
        <SectionContainer marginY="4.5rem">
          <Grid container spacing={6} alignItems="center">
            <Grid container item xs={12} md={6}>
              <Box>
                <Typography variant="h1" align="center" fontWeight={600}>
                  404
                </Typography>
                <Typography variant="body1" align="center" color={colours.grey}>
                  Oops! Looks like you followed a bad link. If you think this is
                  a problem with us, please{" "}
                  <Link color={colours.blue} underline="none">
                    tell us
                  </Link>
                </Typography>
                <Box
                  display="flex"
                  width="100%"
                  marginTop="2rem"
                  justifyContent="center"
                >
                  <Link underline="none" href="/">
                    <AddToCartButton>Back home</AddToCartButton>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid container item xs={12} md={6}>
              <Box maxWidth="500px" width="100%" height="100%">
                <img
                  src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration6.svg"
                  alt="404 not found"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </SectionContainer>
      </main>
      <Divider />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default NotFound;
