import { Box, Grid, Typography } from "@mui/material";
import { HomepageButton } from "./Section";
import styled from "styled-components";
import { colours } from "../../constants/colours";

const CoverImage = styled.img`
  max-width: 600px;
  width: 100%;
  height: 100%;
`;

const Start = () => (
  <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
      <Box data-aos="fade-right">
        <Box marginBottom={"1rem"}>
          <Typography
            variant="h3"
            fontWeight={"700"}
            sx={{ "@media (max-width: 600px)": { fontSize: "2rem" } }}
          >
            <span style={{ color: colours.blue }}>Experience your music</span>{" "}
            like never before.
          </Typography>
        </Box>
        <Box marginBottom={"1.5rem"}>
          <Typography variant="h6" color={colours.grey} fontWeight={"400"}>
            Super offer till the end of June. All the original headphones at
            maximum:
          </Typography>
          <Typography variant="h3" color={colours.red} fontWeight={"700"}>
            $299.95
          </Typography>
          <HomepageButton
            variant="contained"
            size="large"
            sx={{ marginTop: "1rem", height: "54px" }}
          >
            Discover the offer
          </HomepageButton>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgb(237,241,247)",
            borderRadius: "8px",
            padding: "0.5rem 1rem",
          }}
        >
          <Typography variant="body1">
            $60 Apple Music gift card with purchase of select Beats products.*
          </Typography>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
      <CoverImage
        src="https://assets.maccarianagency.com/backgrounds/img34.png"
        alt="..."
      />
    </Grid>
  </Grid>
);

export default Start;
