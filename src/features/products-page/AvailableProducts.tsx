import { Grid } from "@mui/material";
import ProductCard from "@/features/products-page/ProductCard";
import { ProductCardProps } from "@/features/products-page/types";

const AvailableProducts = ({
  page,
  products,
}: {
  page: number;
  products: ProductCardProps[];
}) => {
  const numOfElementsPerPage = 12;
  const indexOfFirstElement = (page - 1) * numOfElementsPerPage;
  const indexOfLastElement = page * numOfElementsPerPage;

  return (
    <Grid container spacing={{ xs: 4, md: 2 }} height="100%">
      {products
        .filter((_, index: number) => {
          return index >= indexOfFirstElement && index < indexOfLastElement;
        })
        .map((product: ProductCardProps, _) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard
                thumbnail={product.thumbnail}
                title={product.title}
                price={product.price}
                rating={product.rating}
                id={product.id}
              ></ProductCard>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default AvailableProducts;
