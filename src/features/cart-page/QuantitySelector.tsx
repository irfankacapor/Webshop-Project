import { useCart } from "@/context/CartContext";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  useMediaQuery,
} from "@mui/material";

const QuantitySelector = ({
  id,
  size,
  dropdownarrow,
}: {
  id: number;
  size?: string;
  dropdownarrow?: boolean;
}) => {
  const { getItemQuantity, setQuantity } = useCart();
  const isMediumScreen = useMediaQuery(
    "(min-width: 900px) and (max-width: 1199px)",
  );
  const handleQuantityChange = (
    event: SelectChangeEvent<number>,
    child: React.ReactNode,
  ) => {
    const selectedQuantity = event.target.value;
    setQuantity(id, selectedQuantity as number);
  };

  return (
    <FormControl>
      <Select
        value={getItemQuantity(id)}
        onChange={handleQuantityChange}
        sx={{
          maxHeight: size === "large" ? "40px" : "30px",
          marginRight: isMediumScreen ? 0 : "1rem",
          marginBottom: isMediumScreen ? "1rem" : 0,
          maxWidth: dropdownarrow === false ? "3.6rem" : undefined,
        }}
        IconComponent={dropdownarrow === false ? () => null : undefined}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <MenuItem key={num} value={num}>
            {num}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default QuantitySelector;
