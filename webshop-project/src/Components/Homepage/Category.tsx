import { Box, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { colours } from "../../Constants/colours";

const StyledPaper = styled(Paper)`
  height: 100% !important;
  width: 100% !important;
  transition-property: box-shadow !important;
  box-shadow: ${colours.shadow} 0px 3px 6px 0px !important;
  background-color: ${colours.lightgrey} !important;

  padding: 2rem;
  border-radius: 0.5rem !important;
  box-sizing: border-box;
  object-fit: contain;
  transition: transform 0.3s !important;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryContainer = styled(Box)`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 1rem;
`;

const ShapeContainer = styled(Box)`
  border-radius: 100%;
  background-color: ${colours.orange};
  width: 50px;
  height: 50px;
  transform: translate(1rem, -1rem);
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 0;
`;

export interface CategoryProps {
  category: string;
  icon: string;
}

const Category = (props: CategoryProps) => (
  <Box width="100%" height="100%" display="block">
    <StyledPaper elevation={3}>
      <CategoryContainer>
        <ShapeContainer />
        <Icon src={props.icon} alt={props.category} />
      </CategoryContainer>
      <Typography variant="subtitle1" align="center" marginTop="1rem">
        {props.category}
      </Typography>
    </StyledPaper>
  </Box>
);

export default Category;
