import { Drawer } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import { FilterDivider, ResetAllButton } from "./ProductsPageStyles";
import CategoryFilter from "./CategoryFilter";
import { Filters } from "../../Pages/Products";

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
  filters,
  setFilters,
  minPrice,
  maxPrice,
  brands,
  categories,
  resetAll,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  minPrice: number;
  maxPrice: number;
  brands: string[];
  categories: string[];
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
        filters={filters}
        setFilters={setFilters}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <FilterDivider />
      <BrandFilter filters={filters} setFilters={setFilters} brands={brands} />
      <FilterDivider />
      <CategoryFilter
        filters={filters}
        setFilters={setFilters}
        categories={categories}
      />
      <ResetAllButton onClick={resetAll} />
    </StyledDrawer>
  );
};

export default SmallFiltersDrawer;
