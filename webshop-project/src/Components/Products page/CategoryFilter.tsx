import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FilterContainer, FilterHeadingContainer, FilterName } from "./ProductsPageStyles";
import { useState } from "react";
import { Checkbox, Collapse, FormControlLabel, FormGroup, SvgIcon } from "@mui/material";
const CategoryFilter = ({
    categories,
    chosenCategories,
    setChosenCategories
}: {
    categories: string[];
    chosenCategories: string[];
    setChosenCategories: ((categories: string[]) => void);
}) => {
  const [categoryPickerOpen, setCategoryPickerOpen] = useState(false);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.name;
    if (event.target.checked) {
      setChosenCategories([...chosenCategories, category]);
    } else {
      setChosenCategories(
        chosenCategories.filter((chosenCategory) => chosenCategory !== category),
      );
    }
  }

  const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <FilterContainer>
        <FilterHeadingContainer onClick={() => setCategoryPickerOpen((prevValue) => !prevValue)}>
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
                        checked={chosenCategories.includes(category)}
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
  )
}

export default CategoryFilter