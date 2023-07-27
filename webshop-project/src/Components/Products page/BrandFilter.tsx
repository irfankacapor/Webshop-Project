import {
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  SvgIcon,
  TextField,
} from "@mui/material";
import {
  FilterContainer,
  FilterHeadingContainer,
  FilterName,
} from "./ProductsPageStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SearchIcon from "@mui/icons-material/Search";
import { Dispatch, SetStateAction, useState } from "react";
import { Filters } from "../../Pages/Products";

const BrandFilter = ({
  filters,
  setFilters,
  brands,
}: {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  brands: string[];
}) => {
  const [brandPickerOpen, setBrandPickerOpen] = useState(false);

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brand = event.target.name;
    if (event.target.checked) {
      setFilters((prevValue) => ({
        ...filters,
        chosenBrands: [...prevValue.chosenBrands, brand],
      }));
    } else {
      setFilters((prevValue) => ({
        ...filters,
        chosenBrands: prevValue.chosenBrands.filter(
          (chosenBrand) => chosenBrand !== brand,
        ),
      }));
    }
  };

  const handleOtherBrands = (event: React.ChangeEvent<HTMLInputElement>) => {
    const otherBrands = brands.filter((brand, index) => {
      return index >= 7;
    });
    if (event.target.checked) {
      setFilters((prevValue) => ({
        ...filters,
        chosenBrands: [...prevValue.chosenBrands, ...otherBrands],
      }));
    } else {
      setFilters((prevValue) => ({
        ...filters,
        chosenBrands: prevValue.chosenBrands.filter(
          (chosenBrands) => !otherBrands.includes(chosenBrands),
        ),
      }));
    }
  };

  return (
    <FilterContainer>
      <FilterHeadingContainer
        onClick={() => setBrandPickerOpen((prevValue) => !prevValue)}
      >
        <FilterName>Brand</FilterName>
        <SvgIcon>
          {brandPickerOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </SvgIcon>
      </FilterHeadingContainer>
      <Collapse in={brandPickerOpen} sx={{ padding: "0 1.5rem" }}>
        <TextField
          value={filters.searchedBrand}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFilters({ ...filters, searchedBrand: event.target.value });
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <FormGroup>
          {brands
            .filter((_, index) => {
              return index < 7;
            })
            .map((brand) => (
              <FormControlLabel
                key={brand}
                control={
                  <Checkbox
                    checked={filters.chosenBrands.includes(brand)}
                    onChange={handleBrandChange}
                    name={brand}
                  />
                }
                label={brand}
              />
            ))}
          <FormControlLabel
            key="Other"
            control={
              <Checkbox
                checked={brands
                  .filter((brand, index) => index >= 7)
                  .some((brand) => filters.chosenBrands.includes(brand))}
                onChange={handleOtherBrands}
                name="Other"
              />
            }
            label="Other"
          />
        </FormGroup>
      </Collapse>
    </FilterContainer>
  );
};

export default BrandFilter;
