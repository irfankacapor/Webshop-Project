import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

export interface ProductCardProps {
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  id: number;
}

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
              ></ProductCard>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default AvailableProducts;
