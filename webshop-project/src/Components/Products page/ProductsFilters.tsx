import { Box, Typography, Drawer } from "@mui/material";
import styled from "styled-components";

const FilterDrawer = styled(({ ...props }) => (
  <Drawer variant="permanent" {...props} />
))`
  z-index: 0;
  & .MuiPaper-root {
    position: relative;
    max-width: 260px;
    min-width: 260px;
    width: 100%;
    border-width: 0px;
    visibility: visible !important;
    transform: none !important;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const Filters = () => (
  <Box display="flex">
    <FilterDrawer>
      <Box padding="0.5rem 0">
        <Box marginBottom="0.5rem">
          <Box>
            <Typography variant="body1">Placeholder drawer</Typography>
          </Box>
        </Box>
      </Box>
    </FilterDrawer>
  </Box>
);

export default Filters;
