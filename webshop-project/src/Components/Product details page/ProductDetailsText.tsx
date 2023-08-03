import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import styled from "styled-components";
import { DetailsProps } from "../../Pages/Details";
import { colours } from "../../Constants/colours";
import { CreateStars } from "../Products page/ProductCard";

export const AddToCartButton = styled(({ ...props }) => (
  <Button
    variant="contained"
    size="large"
    disableElevation
    fullWidth
    {...props}
  />
))`
  box-sizing: border-box;
  text-transform: none !important;
  background-color: ${colours.blue} !important;
  padding: 10px 22px !important;
  border-radius: 5px !important;
  font-weight: 300 !important;
  :hover {
    box-shadow: rgba(140, 152, 164, 0.176) 0px 10px 40px 10px !important;
  }
`;

const AddToFavoriteButton = styled(({ ...props }) => (
  <Button variant="outlined" size="large" fullWidth {...props}>
    Add to Favorite
  </Button>
))`
  box-sizing: border-box;
  text-transform: none !important;
  padding: 10px 22px !important;
  border-radius: 5px !important;
  font-weight: 300 !important;
`;

const ContactButton = styled(({ ...props }) => (
  <Button
    variant="text"
    size="medium"
    sx={{ marginLeft: props.marginleft }}
    {...props}
  />
))`
  box-sizing: border-box !important;
  text-transform: none !important;
  font-weight: 300 !important;
  color: ${colours.grey} !important;
  padding: 8px 10px !important;
  border-radius: 5px !important;
`;

export const ProductDetailsText = ({ details }: { details: DetailsProps }) => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="body1"
          noWrap
          color={colours.title}
          fontWeight="600"
        >
          {details.title}
        </Typography>
        <Typography
          variant="body1"
          noWrap
          color={colours.title}
          fontWeight="600"
        >{`$${details.price}`}</Typography>
      </Box>
      <Box display="flex" alignItems="center" marginTop="1rem">
        <Typography variant="body1" color={colours.grey} marginRight="0.5rem">
          {details.rating}
        </Typography>
        <CreateStars rating={details.rating} />
      </Box>
      <Box marginTop="2rem">
        <AddToCartButton>Add to cart</AddToCartButton>
      </Box>
      <Box marginTop="2rem">
        <Typography variant="body1" color={colours.title} marginBottom="0.5rem">
          Description
        </Typography>
        <Typography variant="subtitle2" color={colours.grey} fontWeight="300">
          {details.description}
        </Typography>
      </Box>
      <Divider sx={{ marginY: "2rem" }} />
      <Box>
        <AddToFavoriteButton />
      </Box>
      <Box marginTop="2rem">
        <Typography variant="body1">Need support?</Typography>
        <Stack display="flex" flexDirection="row" marginTop="0.25rem">
          <ContactButton startIcon={<LocalPhoneIcon />}>
            Contact sales
          </ContactButton>
          <ContactButton startIcon={<EmailRoundedIcon />} marginleft="1rem">
            Email us
          </ContactButton>
        </Stack>
      </Box>
    </Box>
  );
};
