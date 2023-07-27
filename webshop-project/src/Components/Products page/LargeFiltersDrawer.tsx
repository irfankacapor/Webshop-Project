import { Box, Drawer } from "@mui/material";
import styled from "styled-components";
import { FilterDivider, ResetAllButton } from "./ProductsPageStyles";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import { Filters } from "../../Pages/Products";
import { Dispatch, SetStateAction } from "react";

const FilterDrawer = styled(({ ...props }) => (
  <Drawer variant="permanent" {...props} />
))`
  z-index: 0;
  & .MuiPaper-root {
    position: relative;
    max-width: 260px;
    min-width: 260px;
    width: 100%;
    border-width: 0px;
    visibility: visible !important;
    transform: none !important;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const LargeFiltersDrawer = ({
  filters,
  setFilters,
  minPrice,
  maxPrice,
  brands,
  categories,
  resetAll,
}: {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  minPrice: number;
  maxPrice: number;
  brands: string[];
  categories: string[];
  resetAll: () => void;
}) => {
  return (
    <Box display="flex">
      <FilterDrawer>
        <Box padding="0.5rem 0">
          <PriceFilter
            filters={filters}
            setFilters={setFilters}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
          <FilterDivider />
          <BrandFilter
            filters={filters}
            setFilters={setFilters}
            brands={brands}
          />
          <FilterDivider />
          <CategoryFilter
            filters={filters}
            setFilters={setFilters}
            categories={categories}
          />
          <ResetAllButton onClick={resetAll} />
        </Box>
      </FilterDrawer>
    </Box>
  );
};

export default LargeFiltersDrawer;
