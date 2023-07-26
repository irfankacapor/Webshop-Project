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
  resetAll,
}: {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  resetAll: () => void;
}) => {
  return (
    <Box display="flex">
      <FilterDrawer>
        <Box padding="0.5rem 0">
          <PriceFilter
            filters={filters}
            setFilters={setFilters}
          />
          <FilterDivider />
          <BrandFilter
            filters={filters}
            setFilters={setFilters}
          />
          <FilterDivider/>
          <CategoryFilter
            filters={filters}
            setFilters={setFilters}
        />
          <ResetAllButton onClick={resetAll}/>
        </Box>
      </FilterDrawer>
    </Box>
  );
};

export default LargeFiltersDrawer;
