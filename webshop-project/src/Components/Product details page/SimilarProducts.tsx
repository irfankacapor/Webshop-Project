import { Grid, Typography } from "@mui/material";
import { ProductCardProps } from "../Products page/AvailableProducts";
import { colours } from "../../Constants/colours";

import SimilarProductCard from "./SimilarProductsCard";

interface SimilarProductCardProps extends ProductCardProps {
  description: string;
}

const SimilarProducts = ({
  products,
}: {
  products: SimilarProductCardProps[];
}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h5" color={colours.title} fontWeight={500}>
          Similar products
        </Typography>
      </Grid>
      {products
        .filter((_, index: number) => {
          return index < 4;
        })
        .map((product: SimilarProductCardProps, _) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <SimilarProductCard
                thumbnail={product.thumbnail}
                description={product.description}
                title={product.title}
                price={product.price}
                rating={product.rating}
                id={product.id}
              ></SimilarProductCard>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default SimilarProducts;
