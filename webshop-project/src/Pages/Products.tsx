import Footer from "../Components/Footer";
import { Box, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colours } from "../Constants/colours";
import AvailableProducts from "../Components/Products page/AvailableProducts";
import axios from "axios";
import { ProductsContainer } from "../Components/Products page/ProductsPageStyles";
import Filters from "../Components/Products page/ProductsFilters";
import SortByDropdown from "../Components/Products page/SortByDropdown";
import styled from "styled-components";
import { FilterButton } from "../Components/Products page/ProductsPageStyles";

const FilterButtonContainer = styled(Box)`
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
`;

const Products = () => {
  const APIurl = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("A-Z");
  const numOfPages = Math.round(products.length / 12);

  const handleDrawerOpenClose = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log(open);
  };

  async function getProducts() {
    try {
      const response = await axios.get(APIurl);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSortByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(event.target.value as string);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  return (
    <>
      <main>
        <ProductsContainer>
          <Box display="flex">
            <Filters />

            <Box marginLeft="2rem" width="100%" color={colours.title}>
              <FilterButtonContainer>
                <FilterButton onClick={handleDrawerOpenClose} />

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
                    {products.length} results found
                  </Typography>
                  <SortByDropdown sortBy={sortBy} handleSortByChange={handleSortByChange}/>
                </Box>
              </FilterButtonContainer>

              <Box paddingY="2rem">
                <AvailableProducts page={page} sortBy={sortBy} products={products} />
              </Box>

              <Box display="flex" justifyContent="center" width="100%">
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
