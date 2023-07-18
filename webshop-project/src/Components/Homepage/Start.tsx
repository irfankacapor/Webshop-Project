import { Box, Grid, Typography } from "@mui/material";
import { HomepageButton } from "./Section";
import styled from "styled-components";
import { colours } from "../../Constants/colours";

const CoverImage = styled.img`
  max-width: 600px;
  width: 100%;
  height: 100%;
`;

const Title = styled(({ ...props }) => <Typography variant="h3" {...props} />)`
  font-weight: 700 !important;
  @media (max-width: 600px) {
    font-size: 2rem !important;
  }
`;
const MessageBox = styled(Box)`
  background-color: rgb(237, 241, 247);
  border-radius: 8px;
  padding: 0.5rem 1rem;
`;

const Start = () => (
  <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
      <Box data-aos="fade-right">
        <Box marginBottom="1rem">
          <Title>
            <span style={{ color: colours.blue }}>Experience your music</span>{" "}
            like never before.
          </Title>
        </Box>
        <Box marginBottom={"1.5rem"}>
          <Typography variant="h6" color={colours.grey} fontWeight="400">
            Super offer till the end of June. All the original headphones at
            maximum:
          </Typography>
          <Typography variant="h3" color={colours.red} fontWeight="700">
            $299.95
          </Typography>
          <HomepageButton sx={{ marginTop: "1rem", height: "54px" }}>
            Discover the offer
          </HomepageButton>
        </Box>
        <MessageBox>
          <Typography variant="body1">
            $60 Apple Music gift card with purchase of select Beats products.*
          </Typography>
        </MessageBox>
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
