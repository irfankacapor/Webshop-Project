import {
  Box,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "styled-components";
import { colours } from "@/utils/colours";
import useProductDetails from "@/hooks/useProductDetails";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/utils/helpers";
import QuantitySelector from "./QuantitySelector";

const ThumbnailImage = styled.img`
  border-radius: 8px;
  max-width: 200px;
  width: 100%;
  height: 100%;
  margin-right: 1rem;
`;

const ActionButtons = styled(({ ...props }) => (
  <Link underline="none" variant="subtitle2" color={colours.grey} {...props} />
))`
  display: flex;
  align-items: center;
`;

const CartItem = ({ id }: { id: number }) => {
  const { details } = useProductDetails(id);
  const { removeItem } = useCart();
  const isLargeScreen = useMediaQuery("(min-width: 900px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 900px) and (max-width: 1199px)"
  );

  return (
    <Box>
      <Box display="flex" boxSizing="border-box">
        <ThumbnailImage src={details.thumbnail} alt={details.title} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} order={1}>
            <Box>
              <Typography
                variant="h6"
                fontSize="1.1rem"
                color={colours.title}
                gutterBottom
              >
                {details.title}
              </Typography>
              <Typography
                variant="body1"
                fontSize="0.9rem"
                color={colours.grey}
              >
                {details.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} order={isLargeScreen ? 2 : 3}>
            <Stack
              paddingX={isLargeScreen ? "2rem" : 0}
              flexDirection={isLargeScreen ? "column" : "row"}
            >
              <ActionButtons href="/cart" onClick={() => removeItem(id)}>
                <DeleteOutlineRoundedIcon sx={{ marginRight: "0.25rem" }} />
                Remove
              </ActionButtons>
              <ActionButtons
                sx={{
                  marginTop: isLargeScreen ? "0.5rem" : 0,
                  marginLeft: isLargeScreen ? 0 : "0.5rem",
                }}
              >
                <FavoriteBorderOutlinedIcon sx={{ marginRight: "0.25rem" }} />
                Save
              </ActionButtons>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} order={isLargeScreen ? 3 : 2}>
            <Stack
              width="100%"
              direction={isMediumScreen ? "column" : "row"}
              alignItems={isMediumScreen ? "flex-end" : "center"}
              display="flex"
              justifyContent={!isLargeScreen ? "left" : "flex-end"}
              boxSizing="border-box"
            >
              <QuantitySelector id={id} size="large" />
              <Typography
                variant="body1"
                fontWeight="600"
                color={colours.title}
              >
                {formatCurrency(details.price)}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ marginY: "2rem" }} />
    </Box>
  );
};

export default CartItem;
