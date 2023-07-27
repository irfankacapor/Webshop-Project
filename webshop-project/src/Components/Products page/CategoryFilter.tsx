import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  FilterContainer,
  FilterHeadingContainer,
  FilterName,
} from "./ProductsPageStyles";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  SvgIcon,
} from "@mui/material";
import { Filters } from "../../Pages/Products";
const CategoryFilter = ({
  filters,
  setFilters,
  categories,
}: {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  categories: string[];
}) => {
  const [categoryPickerOpen, setCategoryPickerOpen] = useState(false);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.name;
    if (event.target.checked) {
      setFilters((prevValue) => ({
        ...filters,
        chosenCategories: [...prevValue.chosenCategories, category],
      }));
    } else {
      setFilters((prevValue) => ({
        ...filters,
        chosenCategories: prevValue.chosenCategories.filter(
          (chosenCategory) => chosenCategory !== category,
        ),
      }));
    }
  };

  const capitalizeFirstLetter = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <FilterContainer>
      <FilterHeadingContainer
        onClick={() => setCategoryPickerOpen((prevValue) => !prevValue)}
      >
        <FilterName>Category</FilterName>
        <SvgIcon>
          {categoryPickerOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </SvgIcon>
      </FilterHeadingContainer>
      <Collapse in={categoryPickerOpen} sx={{ padding: "0 1.5rem" }}>
        <FormGroup>
          {categories
            .filter((_, index) => {
              return index < 7;
            })
            .map((category) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={filters.chosenCategories.includes(category)}
                    onChange={handleCategoryChange}
                    name={category}
                  />
                }
                label={capitalizeFirstLetter(category)}
              />
            ))}
        </FormGroup>
      </Collapse>
    </FilterContainer>
  );
};

export default CategoryFilter;
