import { Box, Grid } from "@mui/material";
import Section from "@/features/homepage/Section";
import products from "@/utils/products";
import Product from "@/features/homepage/Product";
import { ProductProps } from "@/features/homepage/types";

const Featured = () => (
  <Box>
    <Section
      sectionName="products"
      sectionTitle="Featured products"
      sectionDescription={[
        "Experience your music like never before. Buy music instruments & accessories online.",
      ]}
      sectionButton="View all"
      sectionTitleAosAnimation="fade-up"
      sectionDescriptionAosAnimation="fade-up"
    />
    <Grid container spacing={4}>
      {products.map((product: ProductProps, index) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="600"
            data-aos-offset="100"
            key={index * 31}
          >
            <Product
              title={product.title}
              image={product.image}
              price={product.price}
            />
          </Grid>
        );
      })}
    </Grid>
  </Box>
);

export default Featured;
