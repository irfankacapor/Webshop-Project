import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

interface ProductCardProps {
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
  id: number;
}

const SortingOptions = {
  NAME_ASC: "A-Z",
  NAME_DESC: "Z-A",
  PRICE_ASC: "low to high",
  PRICE_DESC: "high to low"
}

const AvailableProducts = ({
  page,
  sortBy,
  products,
}: {
  page: number;
  sortBy: string;
  products: ProductCardProps[];
}) => {
  const sortedProducts = products.slice();
  if (sortBy === SortingOptions.NAME_ASC) {
    sortedProducts.sort((productA, productB) =>
      productA.title.localeCompare(productB.title),
    );
  } else if (sortBy === SortingOptions.NAME_DESC) {
    sortedProducts
      .sort((productA, productB) =>
        productA.title.localeCompare(productB.title),
      )
      .reverse();
  } else if (sortBy === SortingOptions.PRICE_ASC) {
    sortedProducts.sort(
      (productA, productB) => productA.price - productB.price,
    );
  } else if (sortBy === SortingOptions.PRICE_DESC) {
    sortedProducts.sort(
      (productA, productB) => productB.price - productA.price,
    );
  }

  const numOfElementsPerPage = 12;
  const indexOfFirstElement = (page - 1) * numOfElementsPerPage;
  const indexOfLastElement = page * numOfElementsPerPage;

  return (
    <Grid container spacing={{ xs: 4, md: 2 }}>
      {sortedProducts
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
