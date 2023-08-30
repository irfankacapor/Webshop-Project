import { Filters, ProductCardProps } from "@/features/products-page/types";
import useProducts from "@/hooks/useProducts";
import React, { Dispatch, SetStateAction, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { colours } from "@/utils/colours";
import { Divider } from "@mui/material";
import {
  Dropdown,
  DropdownItem,
  SearchBarContainer,
  SearchButton,
  SearchIconContainer,
  StyledInput,
} from "@/utils/autocomplete-search-styles";

const AutocompleteSearch = ({
  setFilters,
  filters,
}: {
  setFilters: Dispatch<SetStateAction<Filters>>;
  filters: Filters;
}) => {
  const products = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [inputValue, setInputValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [highlightedOption, setHighlightedOption] = useState<number>(-1);
  const handleInputChange = (event: any) => {
    setDropdownOpen(true);
    setHighlightedOption(-1);
    const newValue = event.target.value;
    newValue !== ""
      ? setFilteredProducts(
          products
            .filter((product) =>
              product.title
                .toLocaleLowerCase()
                .includes(newValue.toLocaleLowerCase()),
            )
            .slice(0, 6),
        )
      : setFilteredProducts([]);

    setInputValue(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      const itemTitle = filteredProducts[highlightedOption].title;
      setFilters((prevFilters) => ({
        ...prevFilters,
        searchedName:
          highlightedOption !== -1 && itemTitle
            ? (itemTitle as string)
            : inputValue,
      }));
      if (highlightedOption !== -1 && itemTitle)
        setInputValue(itemTitle as string);
      setDropdownOpen(false);
    } else if (event.key === "ArrowUp") {
      setHighlightedOption((prevHighlightedOption) =>
        prevHighlightedOption === -1 || prevHighlightedOption === 0
          ? filteredProducts.length - 1
          : prevHighlightedOption - 1,
      );
    } else if (event.key === "ArrowDown") {
      setHighlightedOption((prevHighlightedOption) =>
        prevHighlightedOption === -1 ||
        prevHighlightedOption === filteredProducts.length - 1
          ? 0
          : prevHighlightedOption + 1,
      );
    }
  };

  const handleSearchClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchedName: inputValue,
    }));
    setDropdownOpen(false);
  };

  const handleOptionClick = (title: string) => {
    setInputValue(title);
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchedName: title,
    }));
    setFilteredProducts(
      products
        .filter((product) =>
          product.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()),
        )
        .slice(0, 6),
    );
    setDropdownOpen(false);
  };

  return (
    <>
      <SearchBarContainer>
        <SearchIconContainer>
          <SearchRoundedIcon />
        </SearchIconContainer>
        <StyledInput
          list="product-search-options"
          placeholder="Find products"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck="false"
          onFocus={() => setDropdownOpen(true)}
        ></StyledInput>
        <SearchButton onClick={handleSearchClick}>Search</SearchButton>
      </SearchBarContainer>
      {inputValue !== "" && (
        <Dropdown onMouseEnter={() => setHighlightedOption(-1)}>
          {dropdownOpen &&
            filteredProducts.map((product: ProductCardProps, index) => (
              <div key={product.id * 31}>
                <DropdownItem
                  id={`item-${index}`}
                  onMouseEnter={() => setHighlightedOption(index)}
                  onMouseLeave={() => setHighlightedOption(-1)}
                  style={{
                    backgroundColor:
                      highlightedOption === index
                        ? colours.hoverhighlight
                        : colours.white,
                  }}
                  onClick={(event) => handleOptionClick(product.title)}
                >
                  {product.title}
                </DropdownItem>
                <Divider />
              </div>
            ))}
        </Dropdown>
      )}
    </>
  );
};

export default AutocompleteSearch;
