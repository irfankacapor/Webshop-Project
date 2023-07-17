import Category from "../Homepage/Category";
import { Box, Grid } from "@mui/material";
import Section from "../Homepage/Section";
import categoryList from "../../files/categories";
import styled from "styled-components";

export const CategoryContainer = styled(Box)`
  box-sizing: border-box;
  padding: 2rem 1rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  @media (min-width: 1025px) {
    max-width: 1236px !important;
    padding: 4rem 1rem !important;
  }
  @media (min-width: 690px) {
    max-width: 720px;
    padding: 3rem 1rem !important;
  }
`;

const Categories = () => {
  return (
    <Box>
      <Box marginBottom={"2rem"} display={"block"}>
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
};

export default Categories;
