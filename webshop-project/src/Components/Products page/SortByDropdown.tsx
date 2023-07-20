import { Box, Typography, MenuItem, TextField } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";

const SortByDropdown = () => {
    const [sortBy, setSortBy] = useState("A-Z");

    const handleSortByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSortBy(event.target.value as string);
    };

    const Dropdown = styled(({ ...props }) => <TextField select {...props} />)`
    min-width: 120px !important;
    width: 100%;
    & .MuiSelect-select {
        width: 100%;
        padding: 9px 32px 9px 14px;
        height: auto;
        min-height: 1.4375em;
    }
    `;

    const SortByText = styled (({...props}) => <Typography variant="body1" {...props}>Sort by</Typography>)`
        margin-right: 0.5rem !important;
        box-sizing: border-box;
        width: 100%;
        @media (max-width: 600px){
            display: none;
        }
    `


    return(
        <Box display="flex" alignItems="center" justifySelf="flex-end" boxSizing={"border-box"}>
        <SortByText/>
        <Dropdown value={sortBy} onChange={handleSortByChange}>
            <MenuItem value="A-Z">A-Z</MenuItem>
            <MenuItem value="Z-A">Z-A</MenuItem>
            <MenuItem value="Best seller">Best seller</MenuItem>
            <MenuItem value="Best match">Best match</MenuItem>
            <MenuItem value="Price: low to high">Price: low to high</MenuItem>
            <MenuItem value="Price: high to low">Price: high to low</MenuItem>
        </Dropdown>
        </Box>
    )
}

  export default SortByDropdown;