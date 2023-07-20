import { Grid } from "@mui/material";
import ProductCard, { ProductCardProps } from "./ProductCard";

const AvailableProducts = (props: {
  page: number;
  sortBy: string;
  products: ProductCardProps[];
}) => {
  let sortedProducts = props.products.slice();
  if(props.sortBy === "A-Z"){
    sortedProducts = sortedProducts.sort((productA, productB) => productA.title.localeCompare(productB.title))
  }else if(props.sortBy === "Z-A"){
    sortedProducts = sortedProducts.sort((productA, productB) => productA.title.localeCompare(productB.title)).reverse()
  }else if(props.sortBy === "low to high"){
    sortedProducts = sortedProducts.sort((productA, productB) => productA.price - productB.price)
  }else if(props.sortBy === "high to low"){
    sortedProducts = sortedProducts.sort((productA, productB) => productB.price - productA.price)
  }
  
  return (
  <Grid container spacing={{ xs: 4, md: 2 }}>
    {sortedProducts
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
);}

export default AvailableProducts;
