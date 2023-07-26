import { Box, Drawer } from "@mui/material";
import styled from "styled-components";
import { FilterDivider, ResetAllButton } from "./ProductsPageStyles";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import { FiltersProps } from "./SmallFiltersDrawer";
import CategoryFilter from "./CategoryFilter";

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
  filters
}: {
  filters: FiltersProps
}) => {
  const rangeNotSet = filters.priceRange[0] === 0 && filters.priceRange[1] === 0;
  return (
    <Box display="flex">
      <FilterDrawer>
        <Box padding="0.5rem 0">
          <PriceFilter
            minPrice={filters.minPrice}
            maxPrice={filters.maxPrice}
            priceRange={filters.priceRange}
            onPriceRangeChange={filters.onPriceRangeChange}
            rangeNotSet={rangeNotSet}
          />
          <FilterDivider />
          <BrandFilter
            brands={filters.brands}
            chosenBrands={filters.chosenBrands}
            setChosenBrands={filters.setChosenBrands}
            searchedBrand={filters.searchedBrand}
            setSearchedBrand={filters.setSearchedBrand}
          />
          <FilterDivider/>
          <CategoryFilter
          categories={filters.categories}
          chosenCategories={filters.chosenCategories}
          setChosenCategories={filters.setChosenCategories}
        />
          <ResetAllButton onClick={filters.resetAll} />
        </Box>
      </FilterDrawer>
    </Box>
  );
};

export default LargeFiltersDrawer;
