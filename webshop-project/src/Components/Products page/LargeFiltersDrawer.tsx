import { Box, Drawer } from "@mui/material";
import styled from "styled-components";
import { FilterDivider, ResetAllButton } from "./ProductsPageStyles";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";

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

const Filters = ({
  minPrice,
  maxPrice,
  priceRange,
  onPriceRangeChange,
  rangeNotSet,
  brands,
  chosenBrands,
  setChosenBrands,
  searchedBrand,
  setSearchedBrand,
  resetAll,
}: {
  minPrice: number;
  maxPrice: number;
  priceRange: number[];
  onPriceRangeChange: (event: Event, newValue: number | number[]) => void;
  rangeNotSet: boolean;
  brands: string[];
  chosenBrands: string[];
  setChosenBrands: (brands: string[]) => void;
  searchedBrand: string;
  setSearchedBrand: (brand: string) => void;
  resetAll: () => void;
}) => {
  return (
    <Box display="flex">
      <FilterDrawer>
        <Box padding="0.5rem 0">
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            priceRange={priceRange}
            onPriceRangeChange={onPriceRangeChange}
            rangeNotSet={rangeNotSet}
          />
          <FilterDivider />
          <BrandFilter
            brands={brands}
            chosenBrands={chosenBrands}
            setChosenBrands={setChosenBrands}
            searchedBrand={searchedBrand}
            setSearchedBrand={setSearchedBrand}
          />
          <ResetAllButton resetAll={resetAll} />
        </Box>
      </FilterDrawer>
    </Box>
  );
};

export default Filters;
