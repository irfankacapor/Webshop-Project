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
  resetAll,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
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
      <ResetAllButton onClick={resetAll} />
    </StyledDrawer>
  );
};

export default SmallFiltersDrawer;
