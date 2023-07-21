import { Grid } from "@mui/material";
import styled from "styled-components";
import Section from "./Section";
import { SectionContainer } from "../../Pages/Homepage";
import { colours } from "../../Constants/colours";

const SpecialOfferImage = styled.img`
  display: none;
  max-width: 390px;
  height: auto;
  position: absolute;
  bottom: -164px;
  right: 0;
  @media (min-width: 900px) {
    display: block;
  }
`;

const SpecialOffer = () => (
  <SectionContainer padding="4rem 1rem" marginX="auto" maxWidth="1236px">
    <Grid container position="relative">
      <Grid item xs={12} md={6} data-aos="fade-up">
        <Section
          sectionTitle="Experience your music like never before."
          sectionDescription={[
            "If we're no longer the right solution for you, we'll allow you to export and take your data at anytime for any reason.",
          ]}
          sectionButton="Discover the offer"
          sectionDescriptionColor={colours.mediumdarkgrey}
          sectionTitleColor={colours.darkgrey}
          alignText="left"
          buttonHeight="54px"
        />
      </Grid>

      <SpecialOfferImage
        src="https://assets.maccarianagency.com/backgrounds/img33.png"
        alt="..."
      />
    </Grid>
  </SectionContainer>
);

export default SpecialOffer;
