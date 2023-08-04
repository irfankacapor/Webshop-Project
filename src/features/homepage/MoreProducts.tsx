import { Box, Grid, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { colours } from "@/utils/colours";

export const MoreProductsContainer = styled(Box)`
  display: flex;
  align-item: flex-start;
  border-radius: 8px;
  background-color: ${colours.blue};
`;

const ImageContainer = styled(({ ...props }) => (
  <Grid item xs={12} md={4} {...props} />
))`
  padding: 0 !important;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 300px;
  max-width: 90%;
  object-fit: contain;
  display: block;
`;

const MoreProducts = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <MoreProductsContainer>
      <Grid
        container
        spacing={1}
        alignItems={"center"}
        margin={0}
        data-aos="fade-up"
      >
        <ImageContainer style={{ alignItems: "flex-start" }}>
          <Box>
            <StyledImage
              src="https://assets.maccarianagency.com/backgrounds/img35.png"
              alt="Beats Headphones"
            />
          </Box>
        </ImageContainer>
        <Grid
          item
          xs={12}
          md={4}
          paddingX={"1rem"}
          marginY={"1rem"}
          alignItems={"center"}
        >
          <Box marginBottom={"1rem"}>
            <Typography
              variant="h4"
              align="center"
              color={"white"}
              fontSize={isSmallScreen ? "1.5625rem" : "2.125rem"}
            >
              Fide more products
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color={"white"}
              fontWeight={300}
            >
              If we're no longer the right solution for you, we'll allow you to
              export and take your data at anytime for any reason.
            </Typography>
          </Box>
        </Grid>
        <ImageContainer style={{ justifyContent: "flex-end" }}>
          <StyledImage
            src="https://assets.maccarianagency.com/backgrounds/img36.png"
            alt="..."
          />
        </ImageContainer>
      </Grid>
    </MoreProductsContainer>
  );
};

export default MoreProducts;
