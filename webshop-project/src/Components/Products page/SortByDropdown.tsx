import { Box, Typography, MenuItem, TextField } from "@mui/material";
import styled from "styled-components";
import options from "../../Constants/sorting-options";

const Dropdown = styled(({ ...props }) => <TextField select {...props} />)`
  min-width: 120px !important;
  width: 100%;
  & .MuiSelect-select {
    border-radius: 5px !important;
    width: 100%;
    padding: 9px 32px 9px 14px;
    height: auto;
    min-height: 1.4375em;
  }
`;

const SortByText = styled(({ ...props }) => (
  <Typography variant="body1" {...props}>
    Sort by
  </Typography>
))`
  margin-right: 0.5rem !important;
  box-sizing: border-box;
  min-width: 56px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const SortByDropdown = ({
  handleSortByChange,
  sortBy,
}: {
  handleSortByChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sortBy: string;
}) => (
  <Box
    display="flex"
    alignItems="center"
    justifySelf="flex-end"
    boxSizing={"border-box"}
  >
    <SortByText />
    <Dropdown value={sortBy} onChange={handleSortByChange}>
      {options.map(({option, id}) => <MenuItem value={option} key={id}>{option}</MenuItem>)}
    </Dropdown>
  </Box>
);

export default SortByDropdown;
