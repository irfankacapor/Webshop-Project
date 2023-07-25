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

const SmallFiltersDrawer = ({
  open,
  setOpen,
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
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
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
    </StyledDrawer>
  );
};

export default SmallFiltersDrawer;
