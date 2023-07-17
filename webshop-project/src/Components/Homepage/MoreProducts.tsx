import { Box, Grid, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { colours } from "../../constants/colours";

const MoreProductsContainer = styled(Box)`
  display: flex;
  align-item: flex-start;
  border-radius: 8px;
  background-color: ${colours.blue};
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
        <Grid item xs={12} md={4} style={{ padding: 0 }}>
          <Box>
            <img
              src="https://assets.maccarianagency.com/backgrounds/img35.png"
              alt="Beats Headphones"
              style={{ maxWidth: "90%", width: "300px", objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid
          container
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
        <Grid
          item
          xs={12}
          md={4}
          width={"100%"}
          justifyContent={"flex-end"}
          padding={"0"}
          display={"flex"}
          overflow={"hidden"}
          paddingBottom={"1rem"}
        >
          <img
            src="https://assets.maccarianagency.com/backgrounds/img36.png"
            alt="..."
            style={{
              width: "300px",
              maxWidth: "90%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </MoreProductsContainer>
  );
};

export default MoreProducts;
