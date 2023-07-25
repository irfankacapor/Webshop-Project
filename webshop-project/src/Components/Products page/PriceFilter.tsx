import {
  FilterContainer,
  FilterHeadingContainer,
  FilterName,
} from "./ProductsPageStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box, Collapse, Slider, SvgIcon } from "@mui/material";
import { useState } from "react";

const PriceFilter = ({
  minPrice,
  maxPrice,
  priceRange,
  onPriceRangeChange,
  rangeNotSet,
}: {
  minPrice: number;
  maxPrice: number;
  priceRange: number[];
  onPriceRangeChange: (event: Event, newValue: number | number[]) => void;
  rangeNotSet: boolean;
}) => {
  const [priceSliderOpen, setPriceSliderOpen] = useState(false);

  return (
    <FilterContainer>
      <FilterHeadingContainer
        onClick={() => setPriceSliderOpen((prevValue) => !prevValue)}
      >
        <FilterName>
          Price
          {rangeNotSet ? "" : `: $${priceRange[0]} - $${priceRange[1]}`}
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
            value={priceRange}
            onChange={onPriceRangeChange}
          />
        </Box>
      </Collapse>
    </FilterContainer>
  );
};

export default PriceFilter;
