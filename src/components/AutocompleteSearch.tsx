import { Filters, ProductCardProps } from "@/features/products-page/types";
import useProducts from "@/hooks/useProducts";
import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { colours } from "@/utils/colours";
import { FONT_FAMILY } from "@/utils/global-styles";
import { Divider } from "@mui/material";

const SearchBarContainer = styled.div`
  box-sizing: border-box !important;
  position: relative;
  width: 100% !important;
`;

const SearchIconContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 15px;
  color: ${colours.grey};
`;

const StyledInput = styled.input`
  width: calc(100% - 4rem);
  height: 3rem;
  border-radius: 2rem;
  padding-left: 4rem;
  font-size: 1rem;
  font-family: ${FONT_FAMILY};
  border: 1px solid ${colours.grey};

  &:focus {
    border: 1px solid ${colours.blue};
  }
  &:hover {
    border: 1px solid ${colours.blue};
  }
  &:focus-visible {
    border: 1px solid ${colours.blue} !important;
    outline: none !important;
  }
`;

const SearchButton = styled(({ ...props }) => <button {...props} />)`
  position: absolute;
  height: 3rem;
  top: 2px;
  right: -1px;
  border-radius: 2rem;
  background-color: ${colours.blue};
  color: ${colours.white};
  min-width: 100px;
  border: none;
  font-size: 1rem;
  font-weight: 300;
  font-family: ${FONT_FAMILY};
  cursor: pointer;
`;

const Dropdown = styled.div`
  overflow: hidden;
  position: absolute;
  border-radius: 1rem;
  background-color: ${colours.white};
  min-width: 160px;
  width: calc(100% - 2rem);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: ${colours.hoverhighlight};
  }
`;

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
                .includes(newValue.toLocaleLowerCase())
            )
            .slice(0, 6)
        )
      : setFilteredProducts([]);

    setInputValue(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      const itemTitle = document.getElementById(`item-${highlightedOption}`)
        ?.innerText;
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
          : prevHighlightedOption - 1
      );
    } else if (event.key === "ArrowDown") {
      setHighlightedOption((prevHighlightedOption) =>
        prevHighlightedOption === -1 ||
        prevHighlightedOption === filteredProducts.length - 1
          ? 0
          : prevHighlightedOption + 1
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
          product.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
        )
        .slice(0, 6)
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
