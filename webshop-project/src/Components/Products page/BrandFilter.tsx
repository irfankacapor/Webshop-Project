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
import { useState } from "react";

const BrandFilter = ({
  brands,
  chosenBrands,
  setChosenBrands,
  searchedBrand,
  setSearchedBrand,
}: {
  brands: string[];
  chosenBrands: string[];
  setChosenBrands: (brands: string[]) => void;
  searchedBrand: string;
  setSearchedBrand: (brand: string) => void;
}) => {
  const [brandPickerOpen, setBrandPickerOpen] = useState(false);

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brand = event.target.name;
    if (event.target.checked) {
      setChosenBrands([...chosenBrands, brand]);
    } else {
      setChosenBrands(
        chosenBrands.filter((chosenBrand) => chosenBrand !== brand),
      );
    }
  };

  const handleOtherBrands = (event: React.ChangeEvent<HTMLInputElement>) => {
    const otherBrands = brands.filter((brand, index) => {
      return index >= 7;
    });
    if (event.target.checked) {
      setChosenBrands([...chosenBrands, ...otherBrands]);
    } else {
      setChosenBrands(
        chosenBrands.filter(
          (chosenBrands) => !otherBrands.includes(chosenBrands),
        ),
      );
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
          value={searchedBrand}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchedBrand(event.target.value);
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
                    checked={chosenBrands.includes(brand)}
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
                  .some((brand) => chosenBrands.includes(brand))}
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
