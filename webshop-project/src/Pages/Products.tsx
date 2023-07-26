import Footer from "../Components/Footer";
import { Box, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { colours } from "../Constants/colours";
import AvailableProducts, {
  ProductCardProps,
} from "../Components/Products page/AvailableProducts";
import {
  ProductsContainer,
  FilterButton,
} from "../Components/Products page/ProductsPageStyles";
import SortByDropdown from "../Components/Products page/SortByDropdown";
import SmallFiltersDrawer from "../Components/Products page/SmallFiltersDrawer";
import LoadingScreen from "../Components/Products page/LoadingScreen";
import LargeFiltersDrawer from "../Components/Products page/LargeFiltersDrawer";
import ProductListingBanner from "../Components/Products page/ProductListingBanner";
import { sort, applyFilters } from "../helpers";
import { SortingOptions } from "../Constants/sorting-options";

const FilterButtonContainer = styled(Box)`
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
`;

const Products = () => {
  // API from which the data is fetched
  const APIurl = "https://dummyjson.com/products";
  // Saves the number of products that are shown based on the current filters
  const [numOfProductsFound, setNumOfProductsFound] = useState(0);
  // Products array that is fetched from the API
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [availableProducts, setAvailableProducts] = useState<ProductCardProps[]>([]);
  // Current page of products
  const [page, setPage] = useState(1);
  // Stores how the products are sorted
  const [sortBy, setSortBy] = useState("A-Z");
  // Stores the current price range filter set by the user, is passed down to the ProductsFilter component where it is calculated and set
  const [priceRange, setPriceRange] = useState([0, 0]);
  // Stores the brands chosen by the user
  const [chosenBrands, setChosenBrands] = useState<string[]>([]);
  // Stores the brand that the user is searching for
  const [searchedBrand, setSearchedBrand] = useState("");
  const [chosenCategories, setChosenCategories] = useState<string[]>([]);
  const numOfPages = Math.floor(numOfProductsFound / 12) + 1;
  const [smallDrawerOpen, setSmallDrawerOpen] = useState(false);

  

  // Function that fetches the products from the API, as well as calculates the lowest and highest price over all products. Sets
  const getProducts = async () => {
    try {
      const response = await axios.get(APIurl);
      setProducts(response.data.products);
      setAvailableProducts(sort(response.data.products, sortBy));
      setNumOfProductsFound(response.data.products.length);
    } catch (error) {
      console.log(error);
    }
  };
  // Calls the getProducts function exactly once on mount
  useEffect(() => {
    getProducts();
  }, []);

  // Stores distinct values of brands of the products
  const brands =
    products.length > 0
      ? [...new Set(products.map((product) => product.brand))]
      : [];

  // Stores distinct values of categories of the products
  const categories = 
    products.length > 0
      ? [...new Set(products.map((product) => product.category))]
      : [];

  // Stores the price of the most expensive element
  const maxPrice = products.length > 0 ? [...products].sort(
    (productA: ProductCardProps, productB: ProductCardProps) =>
      productB.price - productA.price,
  )[0].price: 0;

  // Stores the price of the cheapest element
  const minPrice = products.length > 0 ? [...products].sort(
    (productA: ProductCardProps, productB: ProductCardProps) =>
      productA.price - productB.price,
  )[0].price : 0;

  // Handles the changes in price range set by the user, is passed down to the ProductFilters component
  const handlePriceRangeChange = (
    event: Event,
    newValue: number | number[],
  ) => {
    setPriceRange(newValue as number[]);
  };

  // Handles the changes in the way the products are sorted and displayed, is passed down to the ProductFilters component
  const handleSortByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(event.target.value as keyof typeof SortingOptions)
    setAvailableProducts(sort(products, event.target.value as keyof typeof SortingOptions));
  };

  // Handles page switches
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  useEffect(() => {
    const filtersToApply = {lowerPriceBound: priceRange[0], upperPriceBound: priceRange[1], chosenBrands: chosenBrands, searchedBrand: searchedBrand, chosenCategories: chosenCategories}
    setAvailableProducts(sort(applyFilters(products, filtersToApply), sortBy))
    setNumOfProductsFound(applyFilters(products, filtersToApply).length)
  }, [priceRange, chosenBrands, searchedBrand, chosenCategories, products, sortBy])

  // Resets all filters to default
  const resetAll = () => {
    setPriceRange([0, 0]);
    setChosenBrands([]);
    setSearchedBrand("");
    setChosenCategories([]);
  };
  
  const filters={
    minPrice,
    maxPrice,
    priceRange,
    onPriceRangeChange: handlePriceRangeChange,
    brands,
    chosenBrands,
    setChosenBrands,
    searchedBrand,
    setSearchedBrand,
    categories,
    chosenCategories,
    setChosenCategories,
    resetAll,
  }

  return products.length === 0 ? (
    <LoadingScreen />
  ) : (
    <>
      <main>
        <ProductListingBanner/>
        <SmallFiltersDrawer
          open={smallDrawerOpen}
          setOpen={setSmallDrawerOpen}
          filters={filters}
        />
        <ProductsContainer>
          <Box display="flex">
            <LargeFiltersDrawer
              filters={filters}
            />

            <Box marginLeft="2rem" width="100%" color={colours.title}>
              <FilterButtonContainer>
                <FilterButton
                  onClick={() => setSmallDrawerOpen((prevValue) => !prevValue)}
                />

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                >
                  <Typography
                    variant="body1"
                    color={colours.title}
                    fontWeight="700"
                    marginRight="0.5rem"
                  >
                    {numOfProductsFound} results found
                  </Typography>
                  <SortByDropdown
                    sortBy={sortBy}
                    handleSortByChange={handleSortByChange}
                  />
                </Box>
              </FilterButtonContainer>

              <Box paddingY="2rem">
                {
                availableProducts.length > 0
                ? <AvailableProducts
                  page={page}
                  products={availableProducts}
                />
                : <Box width="100%" height="100%" textAlign="center" justifyContent="center" justifyItems="center">
                    <Typography variant="body1" color={colours.title}>No products match the current filters</Typography>
                  </Box>
                }
              </Box>

              <Box display="flex" justifyContent="center" width="100%" alignSelf="bottom" justifyItems="bottom">
                <Pagination
                  count={numOfPages}
                  size="large"
                  color="primary"
                  page={page}
                  onChange={handlePageChange}
                />
              </Box>
            </Box>
          </Box>
        </ProductsContainer>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Products;
