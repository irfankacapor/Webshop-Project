import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import { DetailsProps } from "./types";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  box-sizing: border-box;
`;

const ProductImages = ({ details }: { details: DetailsProps }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display="flex">
          <StyledImage src={details.thumbnail} alt="thumbnail image" />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box display="flex">
          <StyledImage src={details.images[0]} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box display="flex">
          <StyledImage src={details.images[1]} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductImages;
