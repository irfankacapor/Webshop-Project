import {
  Box,
  Button,
  CardMedia,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import styled from "styled-components";
import { colours } from "@/utils/colours";

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
    <span className="filter-text">Filter</span>
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

  @media (max-width: 400px) {
    .filter-text {
      display: none;
    }
    & img {
      margin: 0 !important;
    }
    .MuiButton-startIcon {
      margin: 0 !important;
    }
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
  cursor: pointer;
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

export const StyledStarIcon = styled(StarIcon)`
  width: 16px !important;
  height: 16px !important;
`;

export const StyledCardMedia = styled(({ ...props }) => (
  <CardMedia role="img" {...props} />
))`
  height: 320px;
  overflow: hidden;
  position: relative;
  background-color: transparent;
  border-radius: 8px;
`;

export const FavouriteIconContainer = styled(Box)`
  background-color: ${colours.white};
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-sizing: border-box;
  object-fit: contain;
  height: 52px;
  width: 52px;
  cursor: pointer !important;
`;

export const ProductCaption = styled(({ ...props }) => (
  <Typography variant="body1" {...props} />
))`
  color: ${colours.title} !important;
  text-transform: uppercase;
  font-weight: 600 !important;
  text-overflow: ellipsis;
`;

export const ProductButtons = styled(({ ...props }) => (
  <Button variant="contained" size="large" {...props} />
))`
  min-width: 4rem !important;
  width: 100%;
  transition-property: box-shadow;
  box-shadow: ${colours.lightshadow} 0px 12px 15px !important;
  padding: 10px 22px !important;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const SeeDetailsButton = styled(({ ...props }) => (
  <Button
    variant="text"
    fullWidth
    size="large"
    component={Link}
    endIcon={<KeyboardArrowRightRoundedIcon />}
    {...props}
  />
))`
  text-transform: none !important;
  display: flex;
  justify-content: space-between !important;
  align-items: center;
  border-radius: 5px !important;
  padding: 10px 11px !important;
  color: ${colours.title} !important;
  width: 100%;
  margin-top: 0.5rem !important;
  & span {
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;
