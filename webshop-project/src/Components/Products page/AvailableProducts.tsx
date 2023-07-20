import { Grid } from "@mui/material";
import ProductCard, { ProductCardProps } from "./ProductCard";

const AvailableProducts = (props: {
  page: number;
  products: ProductCardProps[];
}) => (
  <Grid container spacing={{ xs: 4, md: 2 }}>
    {props.products
      .filter((product: ProductCardProps, index: number) => {
        return index >= (props.page - 1) * 12 && index < props.page * 12;
      })
      .map((product: ProductCardProps, index: number) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard
              thumbnail={product.thumbnail}
              title={product.title}
              price={product.price}
              rating={product.rating}
            ></ProductCard>
          </Grid>
        );
      })}
  </Grid>
);

export default AvailableProducts;
