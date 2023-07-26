import { Box, Button, Divider, Typography } from "@mui/material";
import styled from "styled-components";
import { colours } from "../../Constants/colours";

export const ProductsContainer = styled(Box)`
  box-sizing: border-box;
  padding: 2rem 1rem;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 600px){
    max-width: 720px;
    padding 3rem 1rem;
  }

  @media (min-width: 900px){
    max-width: 1236px;
    padding: 4rem 1rem;
  }
`;

export const FilterButton = styled(({ ...props }) => (
  <Button
    variant="outlined"
    size="medium"
    startIcon={
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/ios/50/empty-filter--v1.png"
        alt="empty-filter--v1"
      />
    }
    {...props}
  >
    Filter
  </Button>
))`
  text-transform: none !important;
  color: ${colours.title} !important;
  border-color: rgba(0, 0, 0, 0.12) !important;
  margin-right: 1rem !important;
  border-radius: 5px !important;
  padding: 8px 15px !important;
  cursor: pointer;

  :hover {
    border-color: ${colours.blue} !important;
  }

  @media (min-width: 900px) {
    display: none !important;
  }

  & img {
    margin-right: 0.5rem;
  }
`;

export const FilterName = styled(({ ...props }) => (
  <Typography variant="body1" {...props} />
))`
  color: ${colours.title} !important;
  font-weight: 600 !important;
`;

export const FilterHeadingContainer = styled(({ ...props }) => (
  <Box {...props} />
))`
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

export const FilterContainer = styled(Box)``;

export const FilterDivider = styled(Divider)`
  margin: 1.5rem 0 !important;
`;

export const ResetAllButton = styled(({ ...props }) => (
  <Button size="medium" variant="outlined" {...props}>
    Reset all
  </Button>
))`
  text-transform: none !important;
  width: 100%;
  padding: 10px 21px !important;
  border-radius: 5px !important;
  margin-top: 24px !important;
`;
