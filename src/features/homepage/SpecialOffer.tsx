import { Grid } from "@mui/material";
import styled from "styled-components";
import Section from "@/features/homepage/Section";
import { colours } from "@/utils/colours";
import { SectionContainer } from "@/features/homepage/styles";
import { useTranslation } from "react-i18next";

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

const SpecialOffer = () => {
  const { t } = useTranslation();
  return (
    <SectionContainer padding="4rem 1rem" marginX="auto" maxWidth="1236px">
      <Grid container position="relative">
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Section
            sectionTitle={t("homepage.special_offer.title")}
            sectionDescription={[t("homepage.special_offer.description")]}
            sectionButton={t("homepage.special_offer.button")}
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
};

export default SpecialOffer;
