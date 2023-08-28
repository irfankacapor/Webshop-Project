import styled from "styled-components";
import { colours } from "./colours";
import { FONT_FAMILY } from "./global-styles";

export const SearchBarContainer = styled.div`
  box-sizing: border-box !important;
  position: relative;
  width: 100% !important;
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 15px;
  color: ${colours.grey};
`;

export const StyledInput = styled.input`
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

export const SearchButton = styled(({ ...props }) => <button {...props} />)`
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

export const Dropdown = styled.div`
  overflow: hidden;
  position: absolute;
  border-radius: 1rem;
  background-color: ${colours.white};
  min-width: 160px;
  width: calc(100% - 2rem);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: ${colours.hoverhighlight};
  }
`;
