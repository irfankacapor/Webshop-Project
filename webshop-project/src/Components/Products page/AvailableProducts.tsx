import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { SortingOptions } from "../../Constants/sorting-options";

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
  sortBy,
  products,
  lowerPriceBound,
  upperPriceBound,
  setNumOfProductsFound,
  chosenBrands,
  searchedBrand,
  chosenCategories,
}: {
  page: number;
  sortBy: string;
  products: ProductCardProps[];
  lowerPriceBound: number;
  upperPriceBound: number;
  setNumOfProductsFound: (numOfProductsFound: number) => void;
  chosenBrands: string[];
  searchedBrand: string;
  chosenCategories: string[];
}) => {
  // Create a copy of the original products array from the API
  let sortedProducts = products.slice();

  const priceRangeSet = lowerPriceBound !== 0 || upperPriceBound !== 0;

  // Sort the array based on the chosen sort option
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

  // If the price range is set, show only the products whose price lies in that range
  if (priceRangeSet) {
    sortedProducts = sortedProducts.filter((product) => {
      return (
        product.price >= lowerPriceBound && product.price <= upperPriceBound
      );
    });
  }

  if (searchedBrand !== "") {
    sortedProducts = sortedProducts.filter((product) => {
      return product.brand
        .toLocaleLowerCase()
        .includes(searchedBrand.toLocaleLowerCase());
    });
  }

  if (chosenBrands.length > 0) {
    sortedProducts = sortedProducts.filter((product) => {
      return chosenBrands.includes(product.brand);
    });
  }

  if (chosenCategories.length > 0){
    sortedProducts = sortedProducts.filter((product) => {
      return chosenCategories.includes(product.category);
    })
  }

  const numOfElementsPerPage = 12;
  const indexOfFirstElement = (page - 1) * numOfElementsPerPage;
  const indexOfLastElement = page * numOfElementsPerPage;
  
  setNumOfProductsFound(sortedProducts.length);
  
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
