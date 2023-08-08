import useProductDetails from "@/hooks/useProductDetails";
import { colours } from "@/utils/colours";
import { formatCurrency } from "@/utils/helpers";
import { Box, Divider, Typography } from "@mui/material";
import styled from "styled-components";
import QuantitySelector from "@/features/cart-page/QuantitySelector";

const Image = styled.img`
  margin-right: 1rem;
  border-radius: 8px;
  max-width: 120px !important;
  height: 100%;
  width: 100%;
`;

const StyledDivider = styled(Divider)`
  margin-top: 2rem !important;
  margin-bottom: 2rem !important;
`;

const CheckoutCartItem = ({
  id,
  divider,
}: {
  id: number;
  divider: boolean;
}) => {
  const { details } = useProductDetails(id);

  return (
    <Box>
      <Box display="flex">
        <Image src={details.thumbnail} alt={details.title} />
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box>
            <Typography variant="subtitle2" noWrap>
              {details.title}
            </Typography>
            <Typography
              variant="subtitle2"
              color={colours.grey}
              fontWeight={300}
            >
              {details.description}
            </Typography>
          </Box>
          <Box
            height="100%"
            marginLeft="0.5rem"
            display="flex"
            flexDirection={"column"}
          >
            <Typography variant="subtitle2" gutterBottom>
              {formatCurrency(details.price)}
            </Typography>
            <QuantitySelector id={id} dropdownarrow={false} />
          </Box>
        </Box>
      </Box>
      {divider && <StyledDivider />}
    </Box>
  );
};

export default CheckoutCartItem;
