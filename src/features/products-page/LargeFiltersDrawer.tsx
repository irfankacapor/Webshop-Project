import { Dispatch, SetStateAction } from "react";
import { Box, Drawer } from "@mui/material";
import styled from "styled-components";
import PriceFilter from "@/features/products-page/PriceFilter";
import BrandFilter from "@/features/products-page/BrandFilter";
import CategoryFilter from "@/features/products-page/CategoryFilter";
import {
  FilterDivider,
  ResetAllButton,
} from "@/features/products-page/styles";
import { Filters } from "@/features/products-page/types";

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
