import { Box, Grid } from "@mui/material";
import Category from "@/features/homepage/Category";
import Section from "@/features/homepage/Section";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box marginBottom="2rem" display="block">
        <Section
          sectionName={t("homepage.categories.name")}
          sectionTitle={t("homepage.categories.title")}
          sectionDescription={[
            t("homepage.categories.description1"),
            t("homepage.categories.description2"),
          ]}
          sectionButton={t("homepage.categories.button")}
          buttonHref="/products"
        ></Section>
      </Box>
      <Grid container spacing={4}>
        <Category />
      </Grid>
    </Box>
  );
};

export default Categories;
