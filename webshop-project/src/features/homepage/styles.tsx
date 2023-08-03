import {
  Box,
  IconButton,
  Paper,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";
import styled from "styled-components";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { colours } from "@/utils/colours";

export const SectionContainer = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  padding: 2rem 1rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  @media (min-width: 900px) {
    max-width: 1236px !important;
    padding: 4rem 1rem !important;
  }
  @media (min-width: 600px) {
    max-width: 720px;
    padding: 3rem 1rem !important;
  }
`;

export const MoreProductsContainer = styled(Box)`
  box-sizing: border-box;
  padding: 0 1rem;
  overflow: hidden;
  width: 100%;
  margin-left: auto !important;
  margin-right: auto !important;
  @media (min-width: 900px) {
    max-width: 1236px !important;
  }
  @media (min-width: 600px) {
    max-width: 720px;
  }
`;

export const ProductContainer = styled(Paper)`
  transition-property: box-shadow;
  object-fit: contain;
  width: 100%;
  height: 100%;
  box-shadow: ${colours.shadow} 0px 3px 6px 0px !important;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute !important;
  top: 1rem !important;
  right: 1rem !important;
  background-color: white !important;
  padding: 0.75rem !important;
`;
export const StyledStarIcon = styled(StarIcon)`
  color: ${colours.staryellow} !important;
  width: 18 !important;
  height: 18 !important;
`;

export const StyledFavouriteIcon = styled(FavoriteBorderOutlinedIcon)`
  background-color: white;
  width: 1.25rem !important;
  height: 1.25rem !important;
  color: ${colours.yellow} !important;
`;
export const StyledCardActions = styled(CardActions)`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const AddToCartButton = styled(({ ...props }) => (
  <Button
    variant="outlined"
    size="medium"
    startIcon={<BusinessCenterIcon />}
    {...props}
  />
))`
  text-transform: none !important;
  padding: 10px 15px !important;
`;

export const StyledCardMedia = styled(({ ...props }) => (
  <CardMedia component="img" {...props} />
))`
  box-sizing: border-box;
  max-height: calc(280px - 1.5rem);
  object-fit: contain !important;
  background-color: ${colours.lightgrey};
`;

export const ImageContainer = styled(Box)`
  padding: 1.5rem 1.5rem 0 1.5rem;
  background-color: ${colours.lightgrey};
  position: relative;
  height: 280px;
  object-fit: contain;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
`;
