import { Box, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { colours } from "../../constants/colours";

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

export interface CategoryProps {
  category: string;
  icon: string;
}

const Category = (props: CategoryProps) => {
  return (
    <Box width={"100%"} height={"100%"} display={"block"}>
      <StyledPaper elevation={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            marginTop: "1rem",
          }}
        >
          <Box
            sx={{
              borderRadius: "100%",
              backgroundColor: colours.orange,
              width: "50px",
              height: "50px",
              transform: "translate(1rem, -1rem)",
            }}
          ></Box>
          <img
            src={props.icon}
            width={"48px"}
            alt={props.category}
            height={"48px"}
            style={{ position: "absolute", bottom: 0 }}
          />
        </Box>
        <Typography variant="subtitle1" align="center" marginTop={"1rem"}>
          {props.category}
        </Typography>
      </StyledPaper>
    </Box>
  );
};

export default Category;
