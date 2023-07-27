import {
  FilterContainer,
  FilterHeadingContainer,
  FilterName,
} from "./ProductsPageStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box, Collapse, Slider, SvgIcon } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { Filters } from "../../Pages/Products";

const PriceFilter = ({
  filters,
  setFilters,
  minPrice,
  maxPrice,
}: {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  minPrice: number;
  maxPrice: number;
}) => {
  const [priceSliderOpen, setPriceSliderOpen] = useState(false);
  const rangeNotSet =
    filters.priceRange[0] === 0 && filters.priceRange[1] === 0;
  return (
    <FilterContainer>
      <FilterHeadingContainer
        onClick={() => setPriceSliderOpen((prevValue) => !prevValue)}
      >
        <FilterName>
          Price
          {rangeNotSet
            ? ""
            : `: $${filters.priceRange[0]} - $${filters.priceRange[1]}`}
        </FilterName>
        <SvgIcon>
          {priceSliderOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </SvgIcon>
      </FilterHeadingContainer>
      <Collapse in={priceSliderOpen}>
        <Box padding="0 1.5rem">
          <Slider
            min={minPrice}
            max={maxPrice}
            size="medium"
            value={filters.priceRange}
            onChange={(event: Event, newValue: number | number[]) =>
              setFilters({ ...filters, priceRange: newValue as number[] })
            }
          />
        </Box>
      </Collapse>
    </FilterContainer>
  );
};

export default PriceFilter;
