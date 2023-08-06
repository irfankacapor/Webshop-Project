import { Box, Divider, FormControl, Grid, InputLabel, Link, MenuItem, Select, Stack, Typography } from "@mui/material";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styled from "styled-components";
import { colours } from "@/utils/colours";
import useProductDetails from "@/hooks/useProductDetails";
import { useCart } from "@/context/CartContext";

const ThumbnailImage = styled.img`
    border-radius: 8px;
    max-width: 200px;
    width: 100%;
    height: 100%;
    margin-right: 1rem;
`

const ActionButtons = styled(({...props}) => (<Link underline="none" variant="subtitle2" color={colours.grey} {...props}/>))`
    display: flex;
    align-items: center;
`

const CartItem = ({id} : {id: number}) => {
    const { details } = useProductDetails(id);
    const { removeItem, getItemQuantity } = useCart();
    const handleQuantityChange = () => {

    }

  return (
    <Box>
        <Box display="flex">
            <ThumbnailImage src={details.thumbnail} alt={details.title}/>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Box>
                        <Typography variant="h6" color={colours.title} gutterBottom>{details.title}</Typography>
                        <Typography variant="body1" color={colours.grey}>{details.description}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack>
                        <ActionButtons href="/cart" onClick={() => removeItem(id)}><DeleteOutlineRoundedIcon sx={{marginRight: "0.25rem"}}/>Remove</ActionButtons>
                        <ActionButtons sx={{marginTop: "0.5rem"}}><FavoriteBorderOutlinedIcon sx={{marginRight: "0.25rem"}}/>Save</ActionButtons>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack width="100%" direction="row" alignItems="center" display="flex" justifyContent="space-between" boxSizing="border-box">
                        <FormControl>
                            <Select value={getItemQuantity(id)} onChange={handleQuantityChange} sx={{maxHeight: "40px"}}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                <MenuItem key={num} value={num}>
                                    {num}
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Typography variant="body1" color={colours.title}>${details.price}</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
        <Divider sx={{marginY: "2rem"}}/>
    </Box>
  )
}

export default CartItem;