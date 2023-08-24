import { Filters } from "@/features/products-page/types";
import useProducts from "@/hooks/useProducts";
import {
  Autocomplete,
  Button,
  InputAdornment,
  TextField,
  createFilterOptions,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const StyledTextField = styled(({ ...props }) => <TextField {...props} />)`
  & * {
    border-radius: 2rem !important;
  }
`;

const SearchButton = styled(({ ...props }) => (
  <Button variant="contained" size="large" {...props}>
    Search
  </Button>
))`
  border-radius: 2rem !important;
  text-decoration: none !important;
  text-transform: none !important;
  font-weight: 300 !important;
  margin: 0 auto !important;
  padding-top: 12px !important;
  padding-bottom: 12px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  margin-right: -6px !important;
  box-shadow: none !important;
`;

const AutocompleteSearch = ({
  setFilters,
  filters,
}: {
  setFilters: Dispatch<SetStateAction<Filters>>;
  filters: Filters;
}) => {
  const products = useProducts();
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      value={filters.searchedName}
      onChange={(event: any, newValue: string | null) => {
        setFilters({ ...filters, searchedName: newValue ? newValue : "" });
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      freeSolo
      id="product-search-bar"
      disableClearable
      options={
        inputValue !== "" ? products.map((product) => product.title) : []
      }
      filterOptions={createFilterOptions({
        limit: 6,
      })}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          placeholder="Find products"
          InputProps={{
            ...params.InputProps,
            type: "search",
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon sx={{ paddingLeft: "1rem" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <SearchButton
                  onClick={() =>
                    setFilters({ ...filters, searchedName: inputValue })
                  }
                />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default AutocompleteSearch;
