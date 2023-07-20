import { Box, Grid } from "@mui/material";
import Category from "./Category";
import Section from "./Section";
import categoryList from "../../Constants/categories";

const Categories = () => (
  <Box>
    <Box marginBottom="2rem" display="block">
      <Section
        sectionName="CATEGORIES"
        sectionTitle="Choose your product by categories"
        sectionDescription={[
          "Buy Music Instruments & Accessories Online:",
          "Securely and Comfortably",
        ]}
        sectionButton="See all categories"
      ></Section>
    </Box>
    <Grid container spacing={4}>
      {categoryList.map((item, index) => (
        <Grid
          item
          xs={6}
          md={2}
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-offset="100"
          data-aos-duration="600"
        >
          <Category category={item.category} icon={item.icon} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Categories;
