import { Drawer } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import { FilterDivider, ResetAllButton } from "./ProductsPageStyles";

const StyledDrawer = styled(({ ...props }) => (
  <Drawer
    anchor="left"
    PaperProps={{ style: { padding: "1rem" } }}
    {...props}
  />
))``;

export interface FiltersProps {
  minPrice: number;
  maxPrice: number;
  priceRange: number[];
  onPriceRangeChange: (event: Event, newValue: number | number[]) => void;
  brands: string[];
  chosenBrands: string[];
  setChosenBrands: (brands: string[]) => void;
  searchedBrand: string;
  setSearchedBrand: (brand: string) => void;
  resetAll: () => void;
}

const SmallFiltersDrawer = ({
  open,
  setOpen,
  filters,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  filters: FiltersProps;
}) => {
  const rangeNotSet = filters.priceRange[0] === 0 && filters.priceRange[1] === 0;
  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(false);
    };
  return (
    <StyledDrawer open={open} onClose={toggleDrawer()}>
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
      <ResetAllButton resetAll={filters.resetAll} />
    </StyledDrawer>
  );
};

export default SmallFiltersDrawer;
