import { Box, Grid } from "@mui/material";
import Section from "@/features/homepage/Section";
import Product from "@/features/homepage/Product";
import { useTranslation } from "react-i18next";

const Featured = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Section
        sectionName={t("homepage.featured.name")}
        sectionTitle={t("homepage.featured.title")}
        sectionDescription={[t("homepage.featured.description")]}
        sectionButton={t("homepage.featured.button")}
        sectionTitleAosAnimation="fade-up"
        sectionDescriptionAosAnimation="fade-up"
      />
      <Grid container spacing={4}>
        <Product />
      </Grid>
    </Box>
  );
};

export default Featured;
